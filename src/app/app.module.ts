import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { ButtonMenuComponent } from './button-menu/button-menu.component';

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
import { GraphFiltersMenuComponent } from './graph-filters-menu/graph-filters-menu.component';
import { TimeInputsComponent } from './time-inputs/time-inputs.component';
import { ViewButtonComponent } from './view-button/view-button.component';
import { DateTimeInputComponent } from './date-time-input/date-time-input.component';
import { ViewButtonService } from './services/viewButton.service';

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
    NgbModule.forRoot(),
  ],
  schemas:[ NO_ERRORS_SCHEMA],
  providers: [
    GraphService,
    QueryService,
    FiltersService,
    ViewButtonService,
    {provide:"apiUrl", useValue:"https://solarheater-81514.firebaseio.com/temperatureReadings/"}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
