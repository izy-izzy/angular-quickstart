import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState} from 'angularfire2';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AuthServiceProvider{

    constructor(private angularFire: AngularFire, private router: Router){
        this.angularFire.auth.subscribe((user) => {
            if(user) {
                this.router.navigate(['/dashboard']);
                }
            else {
                this.router.navigate(['/loginscreen']);
            }
        });
    }

    public isAuthenticated(){
       return this.angularFire.auth;
    }

    public userLoggedIn(): boolean{
        if (this.angularFire.auth) {
            var auth = this.angularFire.auth.getAuth();
            if (auth !== null && auth.auth) { 
                return true;
            } else { 
                return false;
            }
        } else {
            return false;
        }
    }

    public logIn(email, password): Promise<any>{
        return this.angularFire.auth.login({
            email: email,
            password: password
        },{
            provider: AuthProviders.Password,
            method: AuthMethods.Password,
        });
    }

    public logOut(): void{
        return this.angularFire.auth.logout();
    }
}