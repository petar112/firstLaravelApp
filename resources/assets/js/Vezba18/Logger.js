export class Logger{
    constructor() {
        if(!Logger.Instance){

            Logger.Instance = this;
        }

        return Logger.Instance;
    }


    logg(curDate, item){
        console.log("Time: " + curDate + " - " + item);
    }
}