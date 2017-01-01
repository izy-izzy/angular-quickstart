import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState} from 'angularfire2';
import { initializeApp, auth, database} from 'firebase';
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
        this.angularFire.auth.logout();
        console.log(this.angularFire.auth.getAuth());
        
    }

    public userPasswordReset(email:string): Promise<any>{
        return auth().sendPasswordResetEmail(email);
    }

    public updateEmail(email:string, password:string, newEmail:string): Promise<any>{
       return auth().signInWithEmailAndPassword(email, password)
            .then(function(user) {
                return user.updateEmail(newEmail);
            });
    }

    public changePassword(email:string, password:string, newPassword:string): Promise<any>{
       return auth().signInWithEmailAndPassword(email, password)
            .then(function(user) {
                return user.updatePassword(newPassword);
            });
    }

    public createUser(email:string, password:string):Promise<any>{
        return this.angularFire.auth.createUser({
                email: email,
                password: password
            });
    }
}