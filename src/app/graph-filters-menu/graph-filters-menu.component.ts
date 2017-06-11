import { Component, OnInit } from '@angular/core';
import { Subject } from "rxjs";
import { FiltersService } from "../services/filters.service";

@Component({
  selector: 'graph-filters-menu',
  templateUrl: './graph-filters-menu.component.html',
  styleUrls: ['./graph-filters-menu.component.css']
})
export class GraphFiltersMenuComponent implements OnInit {

    public obs: Subject<any> = new Subject<any>();
    public _id:any;
    public blah:any;

    constructor(public filtersService:FiltersService) {


    }

  ngOnInit() {}
}
