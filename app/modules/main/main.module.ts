import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { UsersModule }          from './../users/users.module';
import { HeroesModule }         from './../heroes/heroes.module';
import { GoogleApiModule }      from './../google-api/google-api.module';
import { DatabaseModule }       from './../database/database.module';
import { MainRoutingModule }    from './routes/main-routes.module';

import { MainComponent }        from './components/main.component'; 
import { NavigationComponent}   from './components/navigation.component';

@NgModule({
  imports:      [ BrowserModule, MainRoutingModule, UsersModule, HeroesModule, GoogleApiModule, DatabaseModule ],
  declarations: [ MainComponent, NavigationComponent ],
  bootstrap:    [ MainComponent ],
  providers:    [ ],
})

export class MainModule { }