import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { DatabaseServiceProvider }  from './services/database.service';
import { AuthServiceProvider }  from './services/auth.service';
import { AngularFireModule }    from 'angularfire2';

import { GoogleApiModule } from './../google-api/google-api.module';

export const firebaseConfig = {
    apiKey: "AIzaSyALyhNv5gFmwBN9wl7ezfLcvQUr-AorfzM",
    authDomain: "heroes-242e8.firebaseapp.com",
    databaseURL: "https://heroes-242e8.firebaseio.com",
    storageBucket: "heroes-242e8.appspot.com",
    messagingSenderId: "13369034775"
};

@NgModule({
  imports:      [ BrowserModule, AngularFireModule.initializeApp(firebaseConfig), GoogleApiModule ],
  declarations: [ ],
  bootstrap:    [ ],
  providers:    [ DatabaseServiceProvider, AuthServiceProvider ],
})

export class DatabaseModule { }