//TODO: rename this to viewSelectionMenu

import { Component, OnInit} from '@angular/core';
import { GraphService } from "../services/graph.service";
import { GraphModel } from "../models/graph.model";
import { QueryService } from "../services/query.service";
import { FiltersService } from "../services/filters.service";
import * as moment from 'moment';


@Component({
  selector: 'button-menu',
  templateUrl: './button-menu.component.html',
  styleUrls: ['./button-menu.component.css']
})

export class ButtonMenuComponent implements OnInit {

    clicked(view):void {
        this.queryService.getView(view);

    }

  constructor(public graphService:GraphService, public queryService:QueryService, public filtersService:FiltersService) {
        this.queryService.query.subscribe( readings => {

        });
  }
 ngOnInit(){}

}
