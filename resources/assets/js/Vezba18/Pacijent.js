import { PersonAbstract } from './PersonCs';
import { Doctor } from './Doctor';
import { logger } from "./Logger";


export class Pacijent extends PersonAbstract{

    constructor(firstName, lastName, JMBG, healthCardNumb){
        super(firstName, lastName);
        this.JMBG = JMBG;
        this.healthCardNumb = healthCardNumb;
        this.doctor = "";
        this.log();
    }

    getFullName(){
        return "Name: " + this.firstName + " " + this.lastName + " - " + this.healthCardNumb;
    }

    selectDoctor(doctor){
        if(doctor instanceof Doctor){
            this.doctor = doctor;
            logger.logg(Date.now(), "Picked: " + this.doctor.getFullName());
            return "Success! You've got yourself a doctor!!";
        }else {
            return "Failed!! That's not a doctor!!";
        }
    }

    sing(){
        return "Singing the loudest!"
    }

    log(){
        logger.logg(Date.now(), this.getFullName());
    }
}





let pacient1 = new Pacijent("Marko", "Markovic", "123351231351134", "1233512", doctor);
let pacient2 = new Pacijent("Nenad", "Nenadovic", "135914813491352", "1344821", doctor);
let pacient3 = new Pacijent("Milos", "Milosevic", "123541233123567", "5676767", doctor);
console.log("PRavimo doktora");
let doctor = new Doctor("Petar", "Nikolic", "Ginekolog", [pacient1, pacient3]);
console.log(pacient1.selectDoctor(doctor));
console.log(pacient2.selectDoctor(pacient1));
console.log(pacient3.selectDoctor(doctor));
console.log(pacient1);
console.log(pacient2);
console.log(doctor);
console.log(doctor.scheduleLabCheck(pacient2, "SIP"));
console.log(doctor.scheduleLabCheck(pacient2, "BP"));