import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';

import { COMPONENTS, PIPES, DIRECTIVES, SERVICES }  from './shared';

import { HeroesRouteingModule } from './routes/heroes.routes';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HeroesRouteingModule ],
  declarations: [ ...COMPONENTS, ...PIPES, ...DIRECTIVES ],
  bootstrap:    [ ],
  providers:    [ ...SERVICES ],
})

export class HeroesModule { }