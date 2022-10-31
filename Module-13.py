# Put your database password to .env file in the same folder like so:
# database_password=yourpassword

from flask import Flask
import mysql.connector
import os
from dotenv import load_dotenv

load_dotenv()
connection = mysql.connector.connect(
  host='127.0.0.1',
  port=3306,
  database='flight_game',
  user='root',
  password=os.environ['database_password'],
  autocommit=False
)
cursor = connection.cursor()
app = Flask(__name__)

@app.route("/")
def home():
  res = """
    <p>Provide number to the <b>/prime_number</b> endpoint to check if it is a prime number or not.</p>
    <p>Provide airport ICAO code to the <b>/airport</b> endpoint to get airport's name and location.</p>
  """
  return res

# Task 1
@app.route("/prime_number/<int:num>")
def prime(num):
  prime = False
  if num > 1:
    for i in range(2, int(num/2)+1):
      if (num % i) == 0:
        break
    else:
      prime = True

  return {"Number":num, "isPrime":prime}

# Task 2
@app.route("/airport/<code>")
def airport(code):
  cursor.execute(f"SELECT name, municipality FROM airport WHERE ident='{code}' LIMIT 1;")
  res = cursor.fetchall()[0]
  return {"ICAO":code, "Name":res[0], "Location":res[1]}