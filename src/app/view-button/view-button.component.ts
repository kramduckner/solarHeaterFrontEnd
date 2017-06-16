import { Component, OnInit, Input } from '@angular/core';
import * as moment from "moment";
import { QueryService } from '../services/query.service';

@Component({
  selector: 'view-button',
  templateUrl: './view-button.component.html',
  styleUrls: ['./view-button.component.css']
})
export class ViewButtonComponent implements OnInit {

    @Input() view: String;
    public selectedColor:String;

    private mapView(view:String){
        if (view === "day"){
            return moment().startOf('day').format();
        } else if (view === "week"){
            return moment().startOf('week').format();
        } else {
            return moment().startOf('month').format();
        }
    }

    public clicked(view:String):void {

        this.selectedColor = "#5cb85c";
        this.queryService.setGraphRange(this.mapView(view), null);
    }

  constructor(public queryService: QueryService) {


    }

  ngOnInit() {
  }

}
