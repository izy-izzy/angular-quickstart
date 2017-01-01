import { NgModule }               from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
import { DistanceChecker }          from './../components/distance-checker.component';
import { AddressLookupChecker }      from './../components/address-lookup.component';

import { CanActivateModule }    from './../../main/shared';

var routes = [
  {path: 'distance',        component: DistanceChecker,       canActivate: [CanActivateModule]     },
  {path: 'addresslookup',   component: AddressLookupChecker,  canActivate: [CanActivateModule]}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ CanActivateModule ]
})

export class GoogleAPIRouting {}