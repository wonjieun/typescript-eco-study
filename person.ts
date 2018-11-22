export class Person {
    public name: string;
  
    constructor(name: string) {
        this.name = name;
        console.log("생성자");
    }

    sayHello() {
      return "Hello, " + this.name;
    }

  }
  
  const person = new Person('Lee');
  
  console.log(person.sayHello());