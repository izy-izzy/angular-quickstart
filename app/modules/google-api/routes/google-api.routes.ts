import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistanceChecker }      from './../components/distance-checker.component';
import { AddressLookupChecker }      from './../components/address-lookup.component';


var routes = [
  {path: 'distance',        component: DistanceChecker},
  {path: 'addresslookup',   component: AddressLookupChecker}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class GoogleAPIRouting {}