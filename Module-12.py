# Put your API key to .env file in the same folder like so:
# api_key=12345678
import requests
import os
from dotenv import load_dotenv
load_dotenv()

# Task 1
# req = requests.get("https://api.chucknorris.io/jokes/random")
# print(req.json()['value'])

# Task 2
api_key = os.environ['api_key']
munic = input('What is your municipality?\n')
req = requests.get(f"http://api.openweathermap.org/geo/1.0/direct?q={munic}&limit={1}&appid={api_key}")
res = req.json()[0]
lat, lon = res['lat'], res['lon']

req = requests.get(f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={api_key}")
res = req.json()
desc = res['weather'][0]['description']
deg = res['main']['temp']-273.15

print(f"Current weather in {munic} is {desc}. Temperature is {deg:.0f} deg.")