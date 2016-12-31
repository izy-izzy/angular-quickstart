import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { AngularFireModule }    from 'angularfire2';

import { SERVICES }             from './shared';

export const firebaseConfig = {
    apiKey: "AIzaSyALyhNv5gFmwBN9wl7ezfLcvQUr-AorfzM",
    authDomain: "heroes-242e8.firebaseapp.com",
    databaseURL: "https://heroes-242e8.firebaseio.com",
    storageBucket: "heroes-242e8.appspot.com",
    messagingSenderId: "13369034775"
};

@NgModule({
  imports:      [ BrowserModule, AngularFireModule.initializeApp(firebaseConfig) ],
  declarations: [ ],
  bootstrap:    [ ],
  providers:    [ ...SERVICES ],
})

export class DatabaseModule { }