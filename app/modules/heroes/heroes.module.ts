import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HeroDetailComponent }  from './components/hero-detail.component';
import { HeroesListComponent }  from './components/heroes-list.component';
import { HeroHashPipe }         from './pipes/hero-hash.pipe';
import { SureSaveDirective }    from './directives/sure-save.directive';
import { HeroProviderService }  from './services/heroes-provider.service';
import { HeroesRouteingModule } from './routes/heroes.routes';
import { DatabaseModule }       from './../database/database.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HeroesRouteingModule, DatabaseModule ],
  declarations: [ HeroDetailComponent, HeroesListComponent, HeroHashPipe, SureSaveDirective ],
  bootstrap:    [ ],
  providers:    [ HeroProviderService ],
})

export class HeroesModule { }