import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';

import { GoogleAPIRouting }     from './routes/google-api.routes';

import { FormsModule }          from '@angular/forms';
import { SERVICES, COMPONENTS } from './shared';

@NgModule({
  imports:      [ BrowserModule, FormsModule, GoogleAPIRouting ],
  declarations: [ ...COMPONENTS ],
  providers:    [ ...SERVICES,  ],
})

export class GoogleApiModule { }