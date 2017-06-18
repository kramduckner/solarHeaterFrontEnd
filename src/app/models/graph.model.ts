export class GraphModel {

    airTemp:Number;
    heaterTemp:Number;
    dateTime:String;
    weather:any;

    constructor(airTemp: Number, heaterTemp:Number, dateTime:String, weather:any) {
        this.airTemp = airTemp;
        this.heaterTemp = heaterTemp;
        this.dateTime = dateTime;
        this.weather = weather;
    }
}
