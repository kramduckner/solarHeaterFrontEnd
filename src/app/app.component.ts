import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { QueryService } from './services/query.service';
import { FiltersService } from './services/filters.service';
import { GraphService } from './services/graph.service';
import { Observable, Subject } from "rxjs";
import { ViewButtonService } from "./services/viewButton.service";
import * as moment from "moment";
//import { GraphModel } from "./models/graph.model";

@Component({
  selector: 'app-root',
    templateUrl:'./app.component.html'
})

export class AppComponent {

//    preFilteredReadings:GraphDataModel[];
    preFilteredReadings:any;
    //readings:GraphDataModel[];
    readings:any;
    isDataAvailable:boolean;

    private mapView(view:String){
        if (view === "day"){
            return moment().startOf('day').format();
        } else if (view === "week"){
            return moment().startOf('week').format();
        } else {
            return moment().startOf('month').format();
        }
    }

    fart: Observable<any>;
//     poop: Subject<any>;
    // addMessageMock: Subject<any>;
    // createMock: Subject<any>;
    // updateMock: Subject<any>
    // messageMock: Array<any>;
    // messagesMock: Observable<any>;
    // test:Observable<any>;

    constructor(public queryService:QueryService, public filtersService:FiltersService, public viewButtonService:ViewButtonService) {

        // this.messageMock = [];
        // this.messagesMock = new Observable();
        // this.addMessageMock = new Subject();
        // this.createMock  = new Subject();
        // this.updateMock = new Subject();
        // this.addMessageMock.subscribe(this.createMock);
        // this.messagesMock = this.updateMock
//        .publishReplay(1)
//        .refCount();
        //at output is the event emitter
        // this.createMock
        //   .map( function() {
        //     return (message) => {
        //       return this.messagesMock.concat(message);
        //     };
        //   }).subscribe(this.updateMock);
        //
        // this.updateMock.subscribe(value=>console.log(value));
        // this.addMessageMock.next(['i', 'hate', 'observables']);

        this.isDataAvailable = false;
        //we subscribe to the observable
        this.queryService.query.subscribe(readings=>{
            this.readings = this.preFilteredReadings = readings;
            this.isDataAvailable = true;
        });

        this.fart = new Observable(observer => {
                setTimeout(() => {
                observer.next({blah: 'fart'});
            }, 1000);
            setTimeout(() => {
                observer.next(43);
            }, 2000);
        });

        // this.poop = new Subject();
        // this.fart.subscribe(this.poop);
        //
        // this.poop.subscribe(value=>console.log(value));

        // setTimeout(()=>{
        //     this.poop.next('fart')
        // }, 3000)

        this.filtersService.filterStream.filter(filter=>{
            return true;
        });

        this.filtersService.filterStream.subscribe(filter=>{

            if (filter.filterSelect === "no filters"){
                this.readings = this.preFilteredReadings;
                return;
            }

            this.readings = this.readings.filter(reading=>{
                if ( (reading.weather.weather[0].description === filter.filterSelect)){
                    return true;
                }
            });
        });
    }

    ngOnInit(){
        //TODO: this is terrible, needs to be fixed
        this.queryService.setGraphRange( ( moment().endOf('day').format() ), "end");
        this.queryService.setGraphRange( ( this.mapView('week') ), "start");
    }
 }
