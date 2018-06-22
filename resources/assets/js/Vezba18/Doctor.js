import { PersonAbstract } from './PersonCs';
import { LabCheck } from "./LabCheck";
import { logger } from "./Logger";

// import { Pacijent } from './Pacijent';


export class Doctor extends PersonAbstract{

    constructor(firstName, lastName, speciality, pacients){
        super(firstName, lastName);
        this.speciality = speciality;
        this.pacients = pacients;
        this.log();
    }

    getFullName(){
        return "Name: " + this.firstName + " " + this.lastName + " - " + this.speciality;
    }

    scheduleLabCheck(pacient, typeOfCheck){
        let labCheck = new LabCheck("12.12.2012", "15:15", pacient);
        if(typeOfCheck === "BP"){
            logger.logg(Date.now(), "Did bloodPresure test!");
            return labCheck.bloodPresure();
        }else if(typeOfCheck === "SIP") {
            logger.logg(Date.now(), "Did suggarInBlood test!");
            return labCheck.sugarInBlood("15:15");
        }else if(typeOfCheck === "CIP"){
            logger.logg(Date.now(), "Did cholesterolInBLood test!");
            return labCheck.cholesterolInBlood();
        }else{
            return "We can't do that check!";
        }
    }

        log(){
            // this.loging = new Logger();
            logger.logg(Date.now(), this.getFullName());
        }

    sing() {
        return "Singing loud!!";
    }
}