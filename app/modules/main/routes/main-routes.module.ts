import { NgModule }             from '@angular/core';
import { RouterModule, Routes, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot  } from '@angular/router';
import { DashboardComponent }   from './../components/dashboard.component';
import { CanActivateModule } from './../services/can-activate-module.service';

var routes = [  
  {path:  '',                redirectTo: '/loginscreen',          pathMatch: 'full'},
  {path:  'dashboard',       component: DashboardComponent,       canActivate: [CanActivateModule]}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ CanActivateModule ]
})

export class MainRoutingModule {}