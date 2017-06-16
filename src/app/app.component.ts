import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { QueryService } from './services/query.service';
import { FiltersService } from './services/filters.service';
import { GraphService } from './services/graph.service';
import { Observable, Subject } from "rxjs";
import * as moment from "moment";

@Component({
  selector: 'app-root',
    templateUrl:'./app.component.html'
})

export class AppComponent {

    readings:any;
    isDataAvailable:boolean;
    startTime:any;
    endTime:any;
    startDate: any;
    endDate: any;

    private buildMomentFromInputs(updatedDateTime){
        return moment({
            month:updatedDateTime.month ? updatedDateTime.month - 1 : this.startDate.month - 1,
            day:updatedDateTime.day ? updatedDateTime.day : this.startDate.day,
            hour:updatedDateTime.hour || this.startTime.hour,
            minute:updatedDateTime.minute || this.startTime.minute
        }).format();
    }

    private mapView(view:String){
        if (view === "day"){
            return moment().startOf('day').format();
        } else if (view === "week"){
            return moment().startOf('week').format();
        } else {
            return moment().startOf('month').format();
        }
    }

    public dateTimeChanged(updatedDateTime, source):void{
        if (source === "endTime" || source === "endDate"){
            if (this.endDate && this.endTime){
                this.queryService.setGraphRange(this.buildMomentFromInputs(updatedDateTime), null);
            }
        } else {
            if (this.startDate && this.startTime){
                this.queryService.setGraphRange(null,this.buildMomentFromInputs(updatedDateTime));
            }
        }
    }
    // fart: Observable<any>;
    // poop: Subject<any>;
    // addMessageMock: Subject<any>;
    // createMock: Subject<any>;
    // updateMock: Subject<any>
    // messageMock: Array<any>;
    // messagesMock: Observable<any>;
    // test:Observable<any>;
    public endDateTime:boolean = false;

    public endDateTimeToggle():void{
        this.endDateTime = !this.endDateTime;
    }

    constructor(public queryService:QueryService, public filtersService:FiltersService) {

        var startMoment = moment().subtract(1, "weeks");

        this.startTime = {
            hour:startMoment.get('hour'),
            minute:startMoment.get('minute'),
        };

        this.startDate = {
            day:startMoment.get('date'),
            //moment 0 indexes the months
            month:startMoment.get('month') + 1,
            year:startMoment.get('year')
        }

        // this.messageMock = [];
        // this.messagesMock = new Observable();
        // this.addMessageMock = new Subject();
        // this.createMock  = new Subject();
        // this.updateMock = new Subject();
        // this.addMessageMock.subscribe(this.createMock);
        // this.messagesMock = this.updateMock
//        .publishReplay(1)
//        .refCount();

        // this.createMock
        //   .map( function() {
        //     return (message) => {
        //       return this.messagesMock.concat(message);
        //     };
        //   }).subscribe(this.updateMock);
        //
        // this.updateMock.subscribe(value=>console.log(value));
        //
        // this.addMessageMock.next(['i', 'hate', 'observables']);

        this.isDataAvailable = false;
        this.queryService.query.subscribe(readings=>{
            this.readings = readings;
            this.isDataAvailable = true;
        });

        // this.fart = new Observable(observer => {
        //         setTimeout(() => {
        //         observer.next(42);
        //     }, 1000);
        //     setTimeout(() => {
        //         observer.next(43);
        //     }, 2000);
        // }).scan(function(acc, x, i ){
        //     return x;
        // });
        //
        // this.fart.subscribe(value=>console.log(value));

        this.filtersService.filterStream.filter(filter=>{
            return true;
        });

        this.filtersService.filterStream.subscribe(filter=>{
            this.readings = this.readings.filter(reading=>{
                if (reading.weather.weather[0].description === filter.filterSelect){
                    return true;
                }
            });
        });
    }

    ngOnInit(){
        this.queryService.setGraphRange(this.mapView('week'),null);
    }
 }
