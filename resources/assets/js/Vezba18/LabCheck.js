import {Doctor} from "./Doctor";

export class LabCheck{

    constructor(checkDate, checkTime, pacient){
        if(LabCheck.Instance === undefined) {
            this.checkDate = checkDate;
            this.checkTime = checkTime;
            this.pacient = pacient;

            LabCheck.Instance = this;
        }

        return LabCheck.Instance;
    }

    bloodPresure() {
        this.valueUp = Math.floor((Math.random() * 100) + 80);
        this.valueDown = Math.floor((Math.random() * 100));
        this.valueUp < this.valueDown ? this.valueDown = Math.floor((Math.random() * this.valueUp)):"";
        this.pulse = Math.floor((Math.random() * 180) + 50);
        return "You have " + this.valueUp + " up value, " + this.valueDown + " down value and " + this.pulse + " puls";
    }

    sugarInBlood(lastMeal) {
        this.value = Math.floor((Math.random() * 15) + 1);
        this.lastMeal = lastMeal;

        return "You ate at: " + this.lastMeal + " and your sugar in blood value is : " + this.value;
    }

    cholesterolInBlood(lastMeal) {
        this.value = Math.floor((Math.random() * 15) + 1);
        this.lastMeal = lastMeal;

        return "You ate at: " + this.lastMeal + " and your cholesterol in blood value is : " + this.value;
    }
}

let lab = new LabCheck("15.03.2018", "12:15", "Petar");
console.log(lab.checkDate);
let lab1 = new LabCheck("17.07.2019", "13:25", "Nikola");
console.log(lab1.checkDate);