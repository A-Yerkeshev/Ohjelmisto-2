class Elevator:
  def __init__(self, bottom, top):
    self.current = bottom
    self.top = top
    self.bottom = bottom
  def go_to_floor(self, target):
    if target > self.top or target < self.bottom:
      print(f"Cannot go to floor {target}, min floor is {self.bottom} and max floor is {self.top}")
      return
    while self.current > target:
      self.floor_down()
    while self.current < target:
      self.floor_up()
  def floor_up(self):
    if self.current < self.top:
      self.current += 1
    print(f"Floor {self.current}")
  def floor_down(self):
    if self.current > self.bottom:
      self.current -= 1
    print(f"Floor {self.current}")

class Building:
  def __init__(self, bottom, top, elevators):
    self.elevators = []
    self.bottom = bottom
    self.top = top

    for i in range(0, elevators):
      self.elevators.append(Elevator(bottom, top))
  def run_elevator(self, el_i, dest):
    if el_i >= len(self.elevators):
      print(f"Building has only {len(self.elevators)} elevators.")
      return
    self.elevators[el_i].go_to_floor(dest)
  def fire_alarm(self):
    for elevator in self.elevators:
      elevator.go_to_floor(self.bottom)

# Task 1
# h = Elevator(2,7)
# h.go_to_floor(5)
# h.go_to_floor(2)

# Task 2
# b = Building(1,7,4)
# print('Elevator 1')
# b.run_elevator(0, 2)
# print('Elevator 2')
# b.run_elevator(1, 5)
# print('Elevator 3')
# b.run_elevator(2, 8)
# print('Elevator 5')
# b.run_elevator(4, -1)

# Task 3
# b = Building(1,7,2)
# print('Elevator 1')
# b.run_elevator(0, 2)
# print('Elevator 2')
# b.run_elevator(1, 5)
# print('Fire alarm')
# b.fire_alarm()