import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';

import { FormsModule }          from '@angular/forms';
import { DistanceChecker }      from './components/distance-checker.component';
import { AddressLookupChecker } from './components/address-lookup.component';
import { GoogleAPIRouting }     from './routes/google-api.routes';
import { DistanceProviderService }  from './services/distance-provider.service';
import { AddressLoopupProviderService }  from './services/address-lookup.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, GoogleAPIRouting ],
  declarations: [ DistanceChecker, AddressLookupChecker ],
  providers:    [ DistanceProviderService, AddressLoopupProviderService ],
})

export class GoogleApiModule { }