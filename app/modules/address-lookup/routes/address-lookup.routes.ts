import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
// import { AddressLookupComponent }   from './../components/address-lookup.component';


var routes = [
//   {path: 'addresslookup',       component: AddressLookupComponent},
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AddressLookupRouting {}