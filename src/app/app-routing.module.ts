import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';

import { DataInsertComponent } from './data-insert/data-insert.component';
import { DataLoadComponent } from './data-load/data-load.component';
import { DataLoad1Component } from './data-load1/data-load1.component';
import { DataLoad2Component } from './data-load2/data-load2.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainDataComponent } from './main-data/main-data.component';
import { LeavesComponent } from './leaves/leaves.component';
import { HierarchyComponent } from './hierarchy/hierarchy.component';

const routes: Routes = [
 {path: '', redirectTo: 'MainData', pathMatch: 'full'},
  {path: 'MainData',component: MainDataComponent},
  {path: 'DataInsert', component: DataInsertComponent},
  {path:'leaves', component: LeavesComponent},
  {path: 'Hierarchy', component: HierarchyComponent},
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
