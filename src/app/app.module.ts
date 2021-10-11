import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { HttpClientModule } from '@angular/common/http';
import { DataLoadComponent } from './data-load/data-load.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainDataComponent } from './main-data/main-data.component';
import { DataLoad1Component } from './data-load1/data-load1.component';
import { DataLoad2Component } from './data-load2/data-load2.component';
import { DataInsertComponent } from './data-insert/data-insert.component';
import { LeavesComponent } from './leaves/leaves.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTreeModule } from '@angular/material/tree';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CalenderComponent } from './calender/calender.component';
import { HierarchyComponent } from './hierarchy/hierarchy.component';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { BMSComponent } from './bms/bms.component';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  declarations: [
    AppComponent,
    DataLoadComponent,
    NotFoundComponent,
    MainDataComponent,
    DataLoad1Component,
    DataLoad2Component,
    DataInsertComponent,
    LeavesComponent,
    CalenderComponent,
    HierarchyComponent,
    BMSComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule, 
    FormsModule,
    DropDownListModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    CdkAccordionModule,
    MatTreeModule,
    CommonModule,
    NgbModalModule,
    NgHttpLoaderModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
