//Exercise #1
///1.1
function functionOne() {
  console.log(this);
}

const firstObject = {
  name: "Ball",
  saying: function () {
    console.log(this);
  },
};
const secondObject = {
  name: "Tire",
  printName: () => {
    console.log(this);
  },
};
functionOne();
firstObject.saying();
secondObject.printName();

//1.2 ^^^
///1.3 First was global object, second is the object and in this case
//printing "Ball", and in the third case it is also global because
//arrow functions do not inherit their objects scope.

///Exercise 2  2.1-2.3

//2.1-2.2
class Person {
  constructor(name, age) {
    this.name = name
      this.age = age
      
  }
   greeting() {
    console.log(`Hello ${this.name} !`);
  };
}
let person1 = new Person("Mckenna", 12);
let person2 = new Person("Walker", 5);
person1.greeting();
person2.greeting();
