export const data = [
  {
    id: 1,
    title: "Introduction to Python",
    description: "Learn what Python is, its features, and how to write your first Python program.",
    lesson: `
      # Python Overview
      Python is an interpreted, high-level programming language that emphasizes readability and simplicity.

      ## Key Features:
      - Simple syntax
      - Versatile (used in web development, data science, automation, etc.)
      - Large community and libraries
    `,
    codeExample: `
      # First Python Program
      print("Hello, World!")  # This prints the text to the screen
    `,
  },
  {
    id: 2,
    title: "Variables & Data Types",
    description: "Understand how to work with variables and common data types like strings, integers, and floats.",
    lesson: `
      # Variables
      Variables store values and can be used to manipulate data in your programs.

      # Data Types:
      - Integer: 5, 42
      - Float: 3.14, -0.5
      - String: "Hello", 'Python'
      - Boolean: True, False
    `,
    codeExample: `
      # Working with variables
      x = 10  # An integer
      y = 3.14  # A float
      name = "Alice"  # A string
      is_student = True  # A boolean

      print(x, y, name, is_student)
    `,
  },
  {
    id: 3,
    title: "Control Flow",
    description: "Learn how to use conditions (if-else), loops (for, while), and logical operators.",
    lesson: `
      # Conditional Statements
      if-else statements allow you to make decisions in your program.

      # Loops
      - for loop: used to iterate over sequences like lists or ranges.
      - while loop: runs as long as a condition is true.

      # Logical Operators:
      - and, or, not
    `,
    codeExample: `
      # If-Else Condition
      x = 10
      if x > 5:
          print("Greater than 5")
      else:
          print("5 or less")

      # For Loop
      for i in range(3):
          print(i)  # Prints: 0, 1, 2

      # While Loop
      count = 0
      while count < 3:
          print(count)  # Prints: 0, 1, 2
          count += 1
    `,
  },
  {
    id: 4,
    title: "Functions",
    description: "Learn how to define and use functions to reuse code.",
    lesson: `
      # Functions
      Functions are blocks of code that perform a task and can be reused.

      # Syntax:
      def function_name(parameters):
          # code block
          return result

      ## Why use functions?
      - Code reusability
      - Organizing code logically
    `,
    codeExample: `
      # Define a function
      def greet(name):
          return f"Hello, {name}!"

      # Call the function
      print(greet("Alice"))  # Output: Hello, Alice!
    `,
  },
  {
    id: 5,
    title: "Lists & Dictionaries",
    description: "Learn how to work with lists (ordered collections) and dictionaries (key-value pairs).",
    lesson: `
      # Lists
      Lists are ordered, mutable collections of items.

      # Dictionaries
      Dictionaries store key-value pairs. Keys must be unique.

      ## Common List Operations:
      - append(), remove(), len(), etc.
      ## Common Dictionary Operations:
      - keys(), values(), get(), etc.
    `,
    codeExample: `
      # List Example
      fruits = ['apple', 'banana', 'cherry']
      print(fruits[1])  # Output: banana
      fruits.append('orange')  # Adds orange to the list

      # Dictionary Example
      student = {'name': 'John', 'age': 25}
      print(student['name'])  # Output: John
      student['age'] = 26  # Update age
    `,
  },
  {
    id: 6,
    title: "Error Handling",
    description: "Learn how to handle errors using try-except blocks and prevent crashes in your programs.",
    lesson: `
      # Try-Except Block
      It helps catch and handle errors gracefully without stopping the program.

      # Syntax:
      try:
          # Code that might throw an error
      except SomeError:
          # Code to handle the error
    `,
    codeExample: `
      # Example of error handling
      try:
          result = 10 / 0  # This will raise an exception
      except ZeroDivisionError:
          print("You can't divide by zero!")

      # Output: You can't divide by zero!
    `,
  },
  {
    id: 7,
    title: "File Handling",
    description: "Learn how to read from and write to files in Python.",
    lesson: `
      # Opening Files
      Use the open() function to open a file for reading or writing.

      # Modes:
      - 'r' = read
      - 'w' = write
      - 'a' = append

      # File Methods:
      - read(), write(), close()
    `,
    codeExample: `
      # Writing to a file
      with open('example.txt', 'w') as file:
          file.write("Hello, file!")

      # Reading from a file
      with open('example.txt', 'r') as file:
          content = file.read()
          print(content)  # Output: Hello, file!
    `,
  },
  {
    id: 8,
    title: "Modules & Libraries",
    description: "Learn how to import and use external Python modules to extend functionality.",
    lesson: `
      # Built-in Modules
      Python comes with many built-in modules like math, datetime, etc.

      # Installing Third-Party Libraries
      Use pip to install third-party packages.

      ## Example of installing a library:
      pip install requests
    `,
    codeExample: `
      # Importing and using a built-in module
      import math
      print(math.sqrt(16))  # Output: 4.0

      # Using a third-party library (requests)
      import requests
      response = requests.get('https://www.example.com')
      print(response.status_code)  # Output: 200 (if the site is up)
    `,
  },
  {
    id: 9,
    title: "Object-Oriented Programming (OOP)",
    description: "Learn the basics of OOP, including classes, objects, and inheritance.",
    lesson: `
      # Classes and Objects
      Classes define the blueprint for objects. Objects are instances of a class.

      # Basic OOP Principles:
      - Encapsulation
      - Inheritance
      - Polymorphism

      # Example:
      - Define a class with attributes and methods
    `,
    codeExample: `
      # Class Definition
      class Dog:
          def __init__(self, name, breed):
              self.name = name
              self.breed = breed

          def bark(self):
              return f"{self.name} says Woof!"

      # Create an object (instance)
      dog = Dog('Buddy', 'Golden Retriever')
      print(dog.bark())  # Output: Buddy says Woof!
    `,
  },
  {
    id: 10,
    title: "Advanced Topics (Decorators, Generators)",
    description: "Dive into more advanced Python concepts like decorators and generators.",
    lesson: `
      # Decorators
      A decorator allows you to modify or extend the behavior of a function.

      # Generators
      Generators allow you to iterate over data without storing it all in memory.

      ## Example of a decorator and a generator:
    `,
    codeExample: `
      # Decorator Example
      def decorator(func):
          def wrapper():
              print("Before function call")
              func()
              print("After function call")
          return wrapper

      @decorator
      def say_hello():
          print("Hello!")

      say_hello()  # Output: Before function call, Hello!, After function call

      # Generator Example
      def count_up_to(max):
          count = 1
          while count <= max:
              yield count
              count += 1

      for number in count_up_to(5):
          print(number)  # Output: 1, 2, 3, 4, 5
    `,
  },
];
