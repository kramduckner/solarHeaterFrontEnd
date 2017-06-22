import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { QueryService } from '../services/query.service';

@Component({
  selector: 'date-time-input',
  templateUrl: './date-time-input.component.html',
  styleUrls: ['./date-time-input.component.css']
})
export class DateTimeInputComponent implements OnInit {

@Input() dateTimeId:String;
time:any;
date: any;

public dateTimeChanged(updatedDateTime):void{
    this.queryService.setGraphRange(this.buildMomentFromInputs(updatedDateTime), this.dateTimeId);
}

private buildMomentFromInputs(updatedDateTime){
    return moment({
        month:updatedDateTime.month ? updatedDateTime.month - 1 : this.date.month - 1,
        day:updatedDateTime.day ? updatedDateTime.day : this.date.day,
        hour:updatedDateTime.hour || this.time.hour,
        minute:updatedDateTime.minute || this.time.minute
    }).utc().format();
}
  constructor(public queryService: QueryService) {
      var startMoment = moment().subtract(1, "weeks");
      //default values
      this.time = {
          hour:startMoment.get('hour'),
          minute:startMoment.get('minute'),
      };

       this.date = {
          day:startMoment.get('date'),
          //moment 0 indexes the months
          month:startMoment.get('month') + 1,
          year:startMoment.get('year')
      }

}

  ngOnInit() {
  }

}
