import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HeroesComponent }   from './components/heroes.component';
import { HeroDetailComponent } from './components/hero-detail.component';
import { HeroHashPipe } from './pipes/hero-hash.pipe';
import { SureSaveDirective } from './directives/sure-save.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ HeroesComponent, HeroDetailComponent, HeroHashPipe, SureSaveDirective  ],
  bootstrap:    [ HeroesComponent ]
})
export class HeroesModule { }