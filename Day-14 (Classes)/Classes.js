// Class Definition:-

// Task One:-

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greeting()
//   }
//   greeting() {
//     return console.log(
//       `Hi, My name is ${this.name} and I am ${this.age} year old`
//     );
//   }

// }

// const taskOne = new Person("Arjun Saxena", 21);
// console.log(taskOne)
// // console.log(taskOne.greeting());

// Task Two:-

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    return console.log(
      `Hi, My name is ${this.name} and I am ${this.age} year old`
    );
  }
  updatedAge(newAge) {
    return (this.age = newAge);
  }
}

const taskTwo = new Person("Arjun Saxena", 21);
console.log(taskTwo);
console.log(taskTwo.updatedAge(23));
console.log(taskTwo);

// Class Inheritance:-

// Task Three:-

// class Student extends Person{
//     constructor(name, age, studentId){
//         super(name,age)
//         this.studentId = studentId
//     }

//     idData(){
//         return console.log(`Student ID is :- ${this.studentId}`)
//     }

// }

// const taskFour = new Student("arjun",25,123)
// console.log(taskThree)
// console.log(taskThree.idData())

// Task Four:-

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  idData() {
    return console.log(`Student ID is :- ${this.studentId}`);
  }

  greeting() {
    return console.log(
      `Hi, My name is ${this.name} and I am ${this.age} year old and My Student Id is ${this.studentId}`
    );
  }
}

const taskFour = new Student("arjun", 25, 123);
console.log(taskFour.greeting());

// Static Methods and Properties:-

// Task Five:-

class PersonTaskFive {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static genericGreeting() {
    return console.log(
      "This is genericGreeting Message to be Create as a static method"
    );
  }
}

console.log(PersonTaskFive.genericGreeting());

// Task Six:-

class StudentTaskSix extends Person {
  static trackStudent = 0;
  constructor(name) {
    super(name);
    StudentTaskSix.trackStudent += 1;
  }

  studentCount() {
    return console.log(
      `Track the number of student: ${StudentTaskSix.trackStudent}`
    );
  }
}

const one = new StudentTaskSix("arjun");
const two = new StudentTaskSix("mahesh");
const three = new StudentTaskSix("Hitesh");
const four = new StudentTaskSix("Deepak");
const five = new StudentTaskSix("Deepak");
const six = new StudentTaskSix("Deepak");

console.log(`Track the number of student: ${StudentTaskSix.trackStudent}`);
// console.log(six.studentCount())

// Getter and Setters:-

// Task Seven:-

class PersonTaskSeven {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return console.log(`Full Name is: ${this.firstName} ${this.lastName}`);
  }
}

const nameOne = new PersonTaskSeven("Arjun", "Saxena");

console.log(nameOne.fullName);

// Task Eight:-

class PersonTaskEight {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get firstName() {
    return `First Name is: ${this._firstName}`;
  }

  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return `Last Name is: ${this._lastName}`;
  }

  set lastName(value) {
    this._lastName = value;
  }
}

const taskEight = new PersonTaskEight("Arjun", "Saxena");

taskEight.firstName = "Deepak ";
taskEight.lastName = "Kumar";

console.log(taskEight.firstName);
console.log(taskEight.lastName);

// Private Field (Optional):-

// Task Nine & Task Ten:-

class Account {
  #balance;
  constructor(balance) {
    this.#balance = balance;
  }

  deposit(money) {
    if(this.#balance >= 0){
      return (this.#balance += money);
    }
  }

  withdraw(money) {
    if (this.#balance <= money) console.log("You don't have sufficient balance");
    else {
      return (this.#balance -= money);
    }
  }
}

let taskNine = new Account(0);
console.log(taskNine.deposit(5000))
// console.log(taskNine.deposit(5000))
// console.log(taskNine.deposit(5000))
// console.log(taskNine.withdraw(1000));
