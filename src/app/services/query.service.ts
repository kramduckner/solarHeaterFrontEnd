import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Subject } from "rxjs";
import * as moment from 'moment';

@Injectable()
export class QueryService {

    public startAt: Subject<any> = new Subject<any>();
    public endAt: Subject<any> = new Subject<any>();
    public query: any;

    public setGraphRange(start, end){
        if (start){
            this.startAt.next({
                key:"date",
                value: start
            });
        } else {
            this.endAt.next({
                key:"date",
                value: end
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
