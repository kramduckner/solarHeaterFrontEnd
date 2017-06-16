import { Injectable } from '@angular/core';
import { GraphModel } from "../models/graph.model";
import { Subject } from 'rxjs';
import { FiltersService } from "../services/filters.service";
import { QueryService } from "../services/query.service";

export class GraphService {

    public graphStream:Subject<any> = new Subject();

    constructor() {


    //ok, ok, ill just forgo this
    //     this.filtersService.filterStream.subscribe(value=>
    //         console.log(value)
    //     );
    //
    //     this.queryService.query.subscribe(value=>
    //         console.log(value)
    //     );
    //
     }

    }


 export const userServiceInjectables: Array<any> = [
     GraphService
 ];
