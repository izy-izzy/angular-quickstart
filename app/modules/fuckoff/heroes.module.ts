import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule }         from '@angular/router';
import { HeroesComponent }      from './components/heroes.component';
import { HeroDetailComponent }  from './components/hero-detail.component';
import { HeroesListComponent }  from './components/heroes-list.component';
import { HeroHashPipe }         from './pipes/hero-hash.pipe';
import { SureSaveDirective }    from './directives/sure-save.directive';
import { HeroProviderService }  from './services/heroes-provider.service';

var routes = [  
  {path:  '',                redirectTo: '/heroeslist',          pathMatch: 'full'},
  {path: 'heroeslist',       component: HeroesListComponent},
  {path: 'herodetail/:uid',  component: HeroDetailComponent}
]

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule, 
                  RouterModule.forRoot(routes) 
                ],
  declarations: [ HeroesComponent, HeroDetailComponent, HeroesListComponent, HeroHashPipe, SureSaveDirective],
  bootstrap:    [ HeroesComponent ],
  providers:    [ HeroProviderService],
})


export class HeroesModule { }