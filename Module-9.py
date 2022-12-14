import random
from xmlrpc.client import boolean

class Auto:
  def __init__(self, rekisteritunnus, huippunopeus):
    self.rekisteritunnus = rekisteritunnus
    self.huippunopeus = huippunopeus
    self.nopeus = 0
    self.matka = 0

  def kiihdytä(self, muutos):
    if self.nopeus + muutos > self.huippunopeus:
      self.nopeus = self.huippunopeus
    elif self.nopeus + muutos < 0:
      self.nopeus = 0
    else:
      self.nopeus += muutos

  def kulje(self, tuntimäärä):
    self.matka += self.nopeus*tuntimäärä

auto1 = Auto('ABC-123', 142)

class Race:
  def __init__(self, name, distance, cars):
    self.name = name
    self.distance = distance
    self.cars = cars

  def hour_passes(self):
    for car in self.cars:
      car.kiihdytä(random.randint(-10, 15))
      car.kulje(1)

  def print_status(self):
    for car in self.cars:
      print(f"Auto {car.rekisteritunnus}; {car.huippunopeus}; {car.nopeus}; {car.matka};")

  def race_finished(self) -> bool:
    for car in self.cars:
      if car.matka >= self.distance:
        return True
    return False

class ElectricCar(Auto):
  def __init__(self, reg_num, max_speed, capacity):
    super().__init__(reg_num, max_speed)
    self.capacity = capacity
class GasolineCar(Auto):
  def __init__(self, reg_num, max_speed, volume):
    super().__init__(reg_num, max_speed)
    self.volume = volume

# Tehtävä 1
# print(f"""
#   Auton rekisteritunnus: {auto1.rekisteritunnus};
#   Auton huippunopeus: {auto1.huippunopeus};
#   Auton tämänhetkinen nopeus: {auto1.nopeus};
#   Auton kuljettu matka: {auto1.matka};
#   """)

# Tehtävä 2
# auto1.kiihdytä(30)
# auto1.kiihdytä(70)
# auto1.kiihdytä(50)
# print(auto1.nopeus)
# auto1.kiihdytä(-200)
# print(auto1.nopeus)

# Tehtävä 3
# auto1.matka = 2000
# auto1.nopeus = 60
# auto1.kulje(1.5)
# print(auto1.matka)

# Tehtävä 4
# cars = []
# for i in range(0, 10):
#   cars.append(Auto('ABC-' + str(i), random.randint(100, 200)))

# race_end = False
# while race_end == False:
#   for car in cars:
#     car.kiihdytä(random.randint(-10, 15))
#     car.kulje(1)
#     if car.matka >= 10000:
#       race_end = True

# for car in cars:
#   print(f"Auto {car.rekisteritunnus}; {car.huippunopeus}; {car.nopeus}; {car.matka};")

# Tehtävä 4 Moduuli 10
# cars = []
# for i in range(0, 10):
#   cars.append(Auto('ABC-' + str(i), random.randint(100, 200)))

# race = Race('Grand Demolition Derby', 8000, cars)

# hour = 0
# while race.race_finished() == False:
#   race.hour_passes()
#   if hour%10 == 0:
#     print(f"Hour {hour}")
#     race.print_status()
#   hour += 1

# race.print_status()

# Tehtävä 2 Moduuli 11
# ecar = ElectricCar('ABC-15', 180, 52.5)
# gcar = GasolineCar('ACD-123', 165, 32.3)
# ecar.kiihdytä(20)
# gcar.kiihdytä(30)
# ecar.kulje(3)
# gcar.kulje(3)
# print(f"Electric car km: {ecar.matka}")
# print(f"Gasoline car km: {gcar.matka}")