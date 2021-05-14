console.log('Welcome in AddressBook System.');
class Contact{

    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
        }
    

    get firstName() {
         return this._firstName; 
    }

    set firstName(firstName) {
        let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        if (nameRegex.test(firstName))
            this._firstName = firstName;
        else
            throw "first Name is invalid";
    }

    get address() {
         return this._address;
    }

    set address(address) {
        let addressRegex = RegExp("^[A-Za-z]{4,}$");
        if (addressRegex.test(address))
            this._address = address;
        else
            throw "Invalid address ";
    }

    
    get city() {
         return this._city;
    }

    set city(city) {
        let cityRegex = RegExp("^[A-Za-z]{4,}$");
        if (cityRegex.test(city))
            this._city = city;
        else
            throw "city  is invalid";
    }

    get state() { 
        return this._state; 
    }

    set state(state) {
        let stateRegex = RegExp("^[A-Za-z0-9]{4,}$");
        if (stateRegex.test(state))
            this._state = state;
        else
            throw "state name is Invalid";
    }
   
    get zip() {
         return this._zip;
    }

    set zip(zip) {
        let zipRegex = RegExp("^[1-9]{3}[ ]?[0-9]{3}$");
        if (zipRegex.test(zip))
            this._zip = zip;
        else
            throw "zip format is not correct ";
    }

    get phoneNumber() {
         return this._phoneNumber; 
    }

    set phoneNumber(phoneNumber) {
        let phoneRegex = RegExp("^[1-9]{2}[ ]{1}[0-9]{10}$");
        if (phoneRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else
            throw "phone number format is wrong";
    }    

    get email() {
         return this._email;
    }

    set email(email) {
        let emailRegex = RegExp("^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$");
        if (emailRegex.test(email))
            this._email = email;
        else
            throw "Wrong  email format";
    }

    toString() {
        return "First Name: " + this.firstName + ", Last Name: " + this.lastName
            + ", Address: " + this.address
            + "\n City: " + this.city + ", State: "
            + this.state + ", Zip: " + this.zip
            + "\n Phone Number: " + this.phoneNumber + "\n Email: " + this.email;
    }
 
}

let addressBook = new Array();
addressBook.push(new Contact("Murari", "Kumar", "Nauranga", "Patna", "Bihar", "123 123",
        "91 8709628464", "abc@bl.com"));
        addressBook.forEach((contact) => console.log(contact.toString()));