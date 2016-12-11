import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistanceChecker }      from './../components/distance-checker.component';


var routes = [
  {path: 'distance',       component: DistanceChecker},
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class GoogleAPIRouting {}