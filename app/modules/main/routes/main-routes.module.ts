import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './../components/dashboard.component';

var routes = [  
  {path:  '',                redirectTo: '/loginscreen',          pathMatch: 'full'},
  {path:  'dashboard',       component: DashboardComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class MainRoutingModule {}