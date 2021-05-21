console.log('linked profile');
class Update {
    constructor(name, age, email, number) {
        this._name = name;
        this._age = age;
        this._email = email;
        this._number = number;
        console.log(this._name, this.age, this._email, this._number)
    }
//SETTERS
    set name(name) {
        this._name = name;  
    }
    set age(age) {
        this._age = age;  
    }
    set email(email) {
        this._email = email;  
    }
    set number(number) {
        this._number = number;
    }

//GETTERS
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    get email() {
        return this._email;
    }
    get number() {
        return this._number;
    }

    toString() {
        return `${this.name} ${this.age} ${this.email} ${this.number}`
    }

    saveProfile() {
        localStorage.setItem('name','age', 'email','number');
    }
}
console.log(Update)
