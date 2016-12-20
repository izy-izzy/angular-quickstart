import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { NgbModule }            from '@ng-bootstrap/ng-bootstrap';
import { UsersModule }          from './../users/users.module';
import { HeroesModule }         from './../heroes/heroes.module';
import { GoogleApiModule }      from './../google-api/google-api.module';
import { DatabaseModule }       from './../database/database.module';
import { MainRoutingModule }    from './routes/main-routes.module';

import { MainComponent }        from './components/main.component'; 
import { NavigationComponent}   from './components/navigation.component';
import { DashboardComponent}    from './components/dashboard.component';

@NgModule({
  imports:      [ BrowserModule, NgbModule.forRoot(), MainRoutingModule, UsersModule, HeroesModule, GoogleApiModule, DatabaseModule ],
  declarations: [ MainComponent, NavigationComponent, DashboardComponent ],
  bootstrap:    [ MainComponent ],
  providers:    [ ],
})

export class MainModule { }