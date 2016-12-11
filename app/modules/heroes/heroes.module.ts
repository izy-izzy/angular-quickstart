import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HeroesComponent }      from './components/heroes.component';
import { HeroDetailComponent }  from './components/hero-detail.component';
import { HeroesListComponent }  from './components/heroes-list.component';
import { HeroHashPipe }         from './pipes/hero-hash.pipe';
import { SureSaveDirective }    from './directives/sure-save.directive';
import { HeroProviderService }  from './services/heroes-provider.service';
import { HeroesRouteingModule } from './routes/heroes.routes';
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
  imports:      [ BrowserModule, FormsModule, HeroesRouteingModule, AngularFireModule.initializeApp(firebaseConfig), GoogleApiModule ],
  declarations: [ HeroesComponent, HeroDetailComponent, HeroesListComponent, HeroHashPipe, SureSaveDirective ],
  bootstrap:    [ HeroesComponent ],
  providers:    [ HeroProviderService ],
})

export class HeroesModule { }