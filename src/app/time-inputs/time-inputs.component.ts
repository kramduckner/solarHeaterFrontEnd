import { Component} from '@angular/core';

@Component({
  selector: 'time-inputs',
  templateUrl: './time-inputs.component.html',
  styleUrls: ['./time-inputs.component.css']
})
export class TimeInputsComponent {

    public endDateTime:Boolean = false;
    public endDateTimeInputToggle():void{
        this.endDateTime = !this.endDateTime;
    }
}
