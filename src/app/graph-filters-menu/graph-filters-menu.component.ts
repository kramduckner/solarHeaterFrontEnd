import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject } from "rxjs";
import { FiltersService } from "../services/filters.service";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'graph-filters-menu',
  templateUrl: './graph-filters-menu.component.html',
  styleUrls: ['./graph-filters-menu.component.css']
})

export class GraphFiltersMenuComponent  {

    public filters: Array<Object>;
    filterForm: FormGroup;

    constructor(public filtersService:FiltersService) {

        this.filterForm = new FormGroup({
            filterSelect: new FormControl("no filters")
        });

        this.filters = [
            {string:"Moderate rain" , value: "moderate rain"},
            {string: "Light rain", value: "light rain"},
            {string: "Overcast clouds", value:"overcast clouds"},
            {string: "Clear sky", value:"clear sky"},
            {string: "No Filters", value: "no filters"},
            {string: "Broken clouds", value: "broken clouds"},
            {string: "Scattered clouds", value: "scattered clouds"},
            {string: "Mist", value: "mist"},
            {string: "Few clouds", value: "few clouds"}
        ]
    }

    ngOnInit(){
        this.filterForm.valueChanges.subscribe(value => {
            this.filtersService.filterStream.next(value);
        });
    }
}
