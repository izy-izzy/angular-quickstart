import { Injectable } from '@angular/core';
import { AuthServiceProvider } from './../../database/services/auth.service';
import { User } from './../classes/users.classes';

@Injectable()
export class UsersProviderService {

    constructor(private authService:AuthServiceProvider){}

    public authUser(user:User){
        this.authService.logIn(user.email, user.password)
            .then((authUser) => {
                user.password = '';
            });
    }

    public getCleanUser(): User{
        var cleanUser:User = {
            email: '',
            name: '',
            password: '',
            roles: []
        }
        return cleanUser;
    }

}