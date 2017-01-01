import { NgModule }             from '@angular/core';
import { RouterModule, Routes, CanActivate, CanDeactivate } from '@angular/router';

import { HeroDetailComponent }  from './../components/hero-detail.component';
import { HeroesListComponent }  from './../components/heroes-list.component';

import { CanActivateModule, CanDeactivateComponent } from './../../main/shared';

var routes = [  
  {path: 'heroeslist',       component: HeroesListComponent, canActivate: [CanActivateModule]},
  {path: 'herodetail/:uid',  component: HeroDetailComponent, canActivate: [CanActivateModule], canDeactivate: [CanDeactivateComponent]}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ CanActivateModule ]
})

export class HeroesRouteingModule {}