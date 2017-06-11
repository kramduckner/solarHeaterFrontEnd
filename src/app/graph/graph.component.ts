import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { GraphService } from "../services/graph.service";
import { QueryService } from "../services/query.service";

//TODO:change 'appgraph' to 'graph'
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit, OnChanges {

    @Input() readingList: any;
    @ViewChild('baseChart') Chart
    temps:Array<Number>;
    times:Array<String>;
    airTemps:Array<String>;

    ngOnChanges(changes: SimpleChanges){
        // idon't know if this actually needs to happen
        var temps = [];
        var times = [];
        var airTemps = [];

         if (changes['readingList']){

             if (this.readingList){
                 this.readingList.forEach(function(reading){
                        temps.push((reading.heaterTemp * 1.8)+32);
                        times.push(moment(reading.date).format('LT') + ' ' + reading.weather.weather[0].description);
                        airTemps.push((reading.airTemp * 1.8)+32);
             }, this);

                this.lineChartData[0] = {data:temps, label:"Heater Temperature (F)"};
                this.lineChartData[1] = {data:airTemps, label:"Air Temperature (F)"}
                this.lineChartLabels = times;
             }
         }
     }

    public lineChartData:Array<any> = [];
    public lineChartLabels:Array<any> = [];

  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

    search():void{
        console.log('blah')
    }

  constructor(public graphService:GraphService, public querySerivce:QueryService){

    }

  ngOnInit() {

  }

}
