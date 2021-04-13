class Person {
    constructor(firstName, lastName, age) {
        this._fistName = firstName;
        this._lastName = lastName;
        this._age = age;
    }
    get firstName() {
        this._fistName = firstName;
    }
    set firstName(firstName) {
        this._fistName = firstName;
    }

    sayHi() {
        return `${this._fistName} ${this._lastName} says Hi!`;
    }
}

let randomPerson = new Person("Lars", "Henriksen", 50);

console.log(randomPerson);