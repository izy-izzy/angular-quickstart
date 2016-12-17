import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent }  from './../components/hero-detail.component';
import { HeroesListComponent }  from './../components/heroes-list.component';

var routes = [  
  //{path:  '',                redirectTo: '/heroeslist',          pathMatch: 'full'},
  {path: 'heroeslist',       component: HeroesListComponent},
  {path: 'herodetail/:uid',  component: HeroDetailComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class HeroesRouteingModule {}