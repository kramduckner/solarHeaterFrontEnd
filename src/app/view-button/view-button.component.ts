import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import * as moment from "moment";
import { QueryService } from '../services/query.service';
import { ViewButtonService } from '../services/viewButton.service';
import { Subject } from "rxjs";

@Component({
  selector: 'view-button',
  templateUrl: './view-button.component.html',
  styleUrls: ['./view-button.component.css']
})
export class ViewButtonComponent implements OnInit {

    @Input() view: any;

    public isSelected:Boolean;
    private mapView(view:String){

        if (view === "day"){
            return moment().startOf('day').format();
        } else if (view === "week"){
            return moment().startOf('week').format();
        } else {
            return moment().startOf('month').format();
        }
    }

    public clicked():void {

        this.viewButtonService.viewButtonClick.next(this.view);
//        this.queryService.setGraphRange(this.mapView(view), null);

    }

  constructor(public queryService: QueryService, public viewButtonService:ViewButtonService) {

    this.viewButtonService.viewButtonClick.subscribe(view=>{
        if (view === this.view) {
            this.view.isSelected = true;
        } else {
            this.view.isSelected = false;
        }
    });

}
  ngOnInit() {}
}
