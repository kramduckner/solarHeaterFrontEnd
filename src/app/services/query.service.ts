import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Subject } from "rxjs";
import * as moment from 'moment';

@Injectable()
export class QueryService {

    public startAt: Subject<any> = new Subject<any>();
    public endAt: Subject<any> = new Subject<any>();
    public query: any;

    public setGraphRange(dateTimeString, dateTimeId){
        if (dateTimeId === "start"){
            this.startAt.next({
                key:"date",
                value: dateTimeString
            });
        } else {
            this.endAt.next({
                key:"date",
                value: dateTimeString
            });
        }
    }

    constructor(public db:AngularFireDatabase){
        this.query = this.db.list('https://solarheater-81514.firebaseio.com/temperatureReadings/', {
             query: {
                 startAt:this.startAt,
                 orderByChild:"dateTime"
             }
        });
    }
}
 export const userServiceInjectables: Array<any> = [
     QueryService
 ];
