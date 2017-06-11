import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { QueryService } from './services/query.service';
import { FiltersService } from './services/filters.service';
import { Observable, Subject } from "rxjs";

@Component({
  selector: 'app-root',
    templateUrl:'./app.component.html'
})
export class AppComponent {

    readings:any;
    isDataAvailable:boolean;
    fart: Observable<any>;
    poop: Subject<any>;
    addMessageMock: Subject<any>;
    createMock: Subject<any>;
    updateMock: Subject<any>
    messageMock: Array<any>;
    messagesMock: Observable<any>;

    constructor(public queryService:QueryService, public filtersService:FiltersService) {

        //im trying to reproduce the passing of the weird scan function. hoepfullt thatll elucidate something

        this.messageMock = [];

        this.messagesMock = new Observable();
        this.addMessageMock = new Subject();
        this.createMock  = new Subject();
        this.updateMock = new Subject();
        this.addMessageMock.subscribe(this.createMock);

        this.messagesMock = this.updateMock

        // .scan(operation, message=>
        //         return operation(message) )
        .publishReplay(1)
        .refCount();

        this.createMock
          .map( function() {
            return (message) => {
              return this.messagesMock.concat(message);
            };
          }).subscribe(this.updateMock);

            this.updateMock.subscribe(value=>console.log(value));
            this.addMessageMock.next(['i', 'hate', 'observables']);

        this.isDataAvailable = false;
        this.queryService.query.subscribe(readings=>{
            this.readings = readings;
            this.isDataAvailable = true;
        });

        this.queryService.query.subscribe(value=>console.log(value));

        // this.fart = new Observable(observer => {
        //         setTimeout(() => {
        //         observer.next(42);
        //     }, 1000);
        //     setTimeout(() => {
        //         observer.next(43);
        //     }, 2000);
        // }).scan(function(acc, x, i ){
        //     console.log(acc);
        //     console.log(x);
        //     return x;
        // })

        this.filtersService.filterStream.filter(filter=>{
            return true;
        });

        this.filtersService.filterStream.subscribe(filter=>{

            this.readings = this.readings.filter(reading=>{
                if (reading.weather.weather[0].description === filter){
                    return true;
                }
            });

    });

    }

    ngOnInit(){

         this.queryService.getView('day');
    }
 }
