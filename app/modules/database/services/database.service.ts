import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, AuthProviders, AuthMethods} from 'angularfire2';

@Injectable()
export class DatabaseServiceProvider {

    constructor(private angularFire: AngularFire){}

    public getHeroes():FirebaseListObservable<any>{
        return this.angularFire.database.list('/heroes');
    }

    public getHero(uid: string): FirebaseObjectObservable<any> {
        return this.angularFire.database.object('/heroes/'+uid);
    }

    public authUser(email, password): Promise<any>{
        return this.angularFire.auth.login({
            email: email,
            password: password
        },{
            provider: AuthProviders.Password,
            method: AuthMethods.Password,
        });
    }

}