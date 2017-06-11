import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { MomentModule } from 'angular2-moment'

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

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    ButtonMenuComponent,
    GraphFiltersMenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MomentModule
  ],
  providers: [
    GraphService,
    QueryService,
    FiltersService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
