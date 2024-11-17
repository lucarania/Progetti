class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(newFirstName) {
    this._firstName = newFirstName;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(newLastName) {
    this._lastName = newLastName;
  }
  get age() {
    return this._age;
  }
  set age(newAge) {
    this._age = newAge;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person("Luca", "Verdi", 22);
console.log(person.fullName);

person.firstName = "Gianni";
person.lastName = "Bianchi";
console.log(person.fullName);
