"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        console.log("생성자");
    }
    Person.prototype.sayHello = function () {
        return "Hello, " + this.name;
    };
    return Person;
}());
exports.Person = Person;
var person = new Person('Lee');
console.log(person.sayHello());
