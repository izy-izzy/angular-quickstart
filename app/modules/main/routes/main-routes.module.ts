import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

var routes = [  
  {path:  '',                redirectTo: '/loginscreen',          pathMatch: 'full'},
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class MainRoutingModule {}