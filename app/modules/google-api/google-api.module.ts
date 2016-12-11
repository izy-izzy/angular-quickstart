import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';

import { FormsModule }          from '@angular/forms';
import { DistanceChecker }      from './components/distance-checker.component';
import { GoogleAPIRouting }     from './routes/google-api.routes';
import { DistanceProviderService }  from './services/distance-provider.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, GoogleAPIRouting],
  declarations: [ DistanceChecker ],
  providers:    [ DistanceProviderService ],
})

export class GoogleApiModule { }