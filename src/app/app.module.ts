import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { GraphService } from './services/graph.service';
import { QueryService } from './services/query.service';
import { FiltersService } from './services/filters.service';
import { GraphModel} from './models/graph.model';
import { ButtonMenuComponent } from './button-menu/button-menu.component';
import { GraphFiltersMenuComponent } from './graph-filters-menu/graph-filters-menu.component';
import { TimeInputsComponent } from './time-inputs/time-inputs.component';
import { ViewButtonComponent } from './view-button/view-button.component';
import { DateTimeInputComponent } from './date-time-input/date-time-input.component';


@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    ButtonMenuComponent,
    GraphFiltersMenuComponent,
    TimeInputsComponent,
    ViewButtonComponent,
    DateTimeInputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    GraphService,
    QueryService,
    FiltersService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
