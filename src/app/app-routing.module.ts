import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import { DataInsertComponent } from './data-insert/data-insert.component';
import { DataLoadComponent } from './data-load/data-load.component';
import { DataLoad1Component } from './data-load1/data-load1.component';
import { DataLoad2Component } from './data-load2/data-load2.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainDataComponent } from './main-data/main-data.component';
import { LeavesComponent } from './leaves/leaves.component';
import { HierarchyComponent } from './hierarchy/hierarchy.component';
import { CalenderComponent } from './calender/calender.component';
import { BMSComponent } from './bms/bms.component';
import { PayrollComponent } from './payroll/payroll.component';
import { EsearchComponent } from './esearch/esearch.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
 {path: '', redirectTo: 'MainData', pathMatch: 'full'},
  {path: 'Dashboard', component: DashboardComponent},
  {path: 'Employee_Search', component: EsearchComponent},
  {path: 'MainData',component: MainDataComponent},
  {path: 'DataInsert', component: DataInsertComponent},
  {path:'leaves', component: LeavesComponent},
  {path: 'Hierarchy', component: HierarchyComponent},
  {path: 'calender', component: CalenderComponent},
  {path: 'bridge-management-system', component: BMSComponent},
  {path: 'payroll', component: PayrollComponent},
  {path:'dataLoad', component: DataLoadComponent},
  {path: 'dataLoad1', component: DataLoad1Component}, 
  {path: 'dataLoad2', component: DataLoad2Component},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
