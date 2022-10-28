class Publication:
  def __init__(self, name):
    self.name = name

class Book(Publication):
  def __init__(self, name, author, pages_num):
    super().__init__(name)
    self.author = author
    self.pages_num = pages_num
  def print_information(self):
    print(f"""
      Name: {self.name},
      Author: {self.author},
      Number of pages: {self.pages_num}
      """)

class Magazine(Publication):
  def __init__(self, name, chief_editor):
    super().__init__(name)
    self.chief_editor = chief_editor
  def print_information(self):
    print(f"""
      Name: {self.name},
      Chief editor: {self.chief_editor}
      """)

d_duck = Magazine('Donald Duck', 'Aki Hyyppä')
comp6 = Book('Compartment No. 6', 'Rosa Liksom', 192)

d_duck.print_information()
comp6.print_information()