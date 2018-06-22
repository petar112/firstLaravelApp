export class PersonAbstract {

    constructor(firstName, lastName){

        this.firstName = firstName;
        this.lastName = lastName;

        if(new.target === PersonAbstract) {
            throw new TypeError("This class cannot be instanced!");
        }
    }

    sing() {
        throw new Error('You have to implement the method doSomething!');
    }
}