import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable()
export class ViewButtonService {
    public viewButtonClick:Subject<Object> = new Subject();

    constructor(){ 
    }
}
 export const userServiceInjectables: Array<any> = [
     ViewButtonService
 ];
