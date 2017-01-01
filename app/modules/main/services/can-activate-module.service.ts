import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild , ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthServiceProvider } from './../../database/shared';

@Injectable()
export class CanActivateModule implements CanActivate, CanActivateChild  {

  constructor(private auth:AuthServiceProvider, private router:Router) {}
  
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) : Observable<boolean>|Promise<boolean>|boolean {
      let loggedIn =  this.auth.userLoggedIn();
      if (loggedIn){
          return true;
      } else {
          this.router.navigate(['/loginscreen']);
          return false;
      }
  }

   canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    return this.canActivate(route, state);
  }
}