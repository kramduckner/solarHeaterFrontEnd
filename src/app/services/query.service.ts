import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Subject } from "rxjs";
import * as moment from 'moment';

@Injectable()
export class QueryService {
    public startAt: Subject<any> = new Subject<any>();
    public query: any;

    private mapView(view:String){
        if (view === "day"){
            return moment().startOf('day').format();
        } else if (view === "week"){
            return moment().startOf('week').format();
        } else {
            return moment().startOf('month').format();
        }
    }

    public getView(view){
        this.startAt.next({
            key:"date",
            value: this.mapView(view)
        });
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
