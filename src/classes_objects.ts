// Q - Define a class called Logger that takes the name of a file in its constructor and provides a method for writing messages to that file. Don’t worry about the actual file I/O operations. Just define the class with the right members.

// A
class Logger {
  constructor(public fileName: string) {}

  log(message: string) {}
}

// Q - Given the Person class below, create a getter for getting the full name of a person.
class Person {
  constructor(public firstName: string, public lastName: string) {}
  // A
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

// Q - Create a new class called Employee that extends Person and adds a new property called salary.
// A
class Employee extends Person {
  constructor(firstName: string, lastName: string, public salary: number) {
    super(firstName, lastName);
  }
}

// Q - What is the difference between private and protected members?
// A - private members can access withing the class, protected members can be accessed both within the class and inherited class

// Q - Given the data below, define an interface for representing employees:
// let employee = {
//   name: "John Smith",
//   salary: 50_000,
//   address: { street: "Flinders st", city: "Melbourne", zipCode: 3144 },
// };

interface Address {
  street: string;
  city: string;
  zipCode: string;
}

interface Employee {
  name: string;
  salary: number;
  address: Address;
}
