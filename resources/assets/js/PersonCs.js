class Person {
    constructor(firstName, lastName, gender){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        Person.eyeNumber = 2;//najbolje sto sam mogao da je staticko polje unutar klase, prodiskutovacemo jos na tu temu
    }

    static setEyeNumber(numb){
        Person.eyeNumber = numb;
    }

    static getEyeNumber(){
        return this.eyeNumber;
    }

    getFullName(){
        return this.firstName + " " + this.lastName;
    }
}

let person1 = new Person("Petar", "Petrovic", "male");
let person2 = new Person("Milos", "Milosevic", "male");

console.log(person1.gender);
console.log(person1.getFullName());
console.log(Person.getEyeNumber());
Person.setEyeNumber(3);
console.log(Person.getEyeNumber());
console.log(person1.getFullName());
console.log(person2.getFullName());
let person3 = new Person("Mara", "Maric", "female");
console.log(Person.getEyeNumber());