import { Injectable } from '@angular/core';
import { GraphModel } from "../models/graph.model";
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()

export class GraphService {

    public currentView: Subject<GraphModel> = new BehaviorSubject<GraphModel>(null);
    public setCurrentView(newView: GraphModel): void {
        this.currentView.next(newView);
    }
}

 export const userServiceInjectables: Array<any> = [
     GraphService
 ];
