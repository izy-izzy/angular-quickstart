import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HeroesComponent }   from './components/heroes.component';
import { HeroDetailComponent } from './components/hero-detail.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ HeroesComponent, HeroDetailComponent],
  bootstrap:    [ HeroesComponent ]
})
export class HeroesModule { }