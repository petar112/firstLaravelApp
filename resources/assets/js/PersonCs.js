var Person = function (firstName, lastName, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;

    Person.eyeNumber = 2;//static field
}// class Person

var Customer = function (firstName, lastName, gender, companyName) {
    Person.call(this, firstName, lastName, gender)
    this.companyName = companyName;
}// class Customer, inherits Person

Person.getEyeNumber = function () {
    return this.eyeNumber;
}// static method

var Petar = new Person("Petar", "Nikolic", "male");//instancing class Person