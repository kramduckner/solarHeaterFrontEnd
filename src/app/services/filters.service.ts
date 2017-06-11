import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()

export class FiltersService {
    public filterStream:Subject<any> = new Subject();
}

 export const userServiceInjectables: Array<any> = [
     FiltersService
 ];
