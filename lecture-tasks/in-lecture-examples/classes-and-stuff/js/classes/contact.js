class Contact {
    constructor(fistName, lastName, tlf, email) {
        this._fistName = firstName;
        this._lastName = lastName;
        this._tlf = tlf;
        this._email = email;
    }

    //setters
    set firstName(firstName) {
        this._fistName = firstName;
    }
    set lastName(lastName) {
        this._lastName = lastName;
    }
    set tlf(tlf) {
        this._tlf = tlf;
    }
    set email(email) {
        this._email = email;
    }

    //getters -- retrieve data
    get firstName() {
        return this._fistName;
    }
    get lastName() {
        return this._lastName;
    }
    get tlf() {
        return this._tlf;
    }
    get email() {
        return this._email;
    }

    toString() {
        return `${this.fistName} ${this.lastName} - ${this.tlf} - ${this.email}`
    }
}