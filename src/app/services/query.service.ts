import { Injectable, Inject } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Subject } from "rxjs";
import * as moment from 'moment';
import { DateTimeModel } from '../models/dateTime.model';

@Injectable()
export class QueryService {

    public startAt: Subject<DateTimeModel> = new Subject<DateTimeModel>();
    public endAt: Subject<DateTimeModel> = new Subject<DateTimeModel>();
    //lets do this..
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

    constructor(public db:AngularFireDatabase, @Inject('apiUrl') public apiUrl: string){
        this.query = this.db.list(this.apiUrl, {
             query: {
                 startAt:this.startAt,
                 endAt:this.endAt,
                 orderByChild:"dateTime"
             }
        });
    }
}
 export const userServiceInjectables: Array<any> = [
     QueryService
 ];
