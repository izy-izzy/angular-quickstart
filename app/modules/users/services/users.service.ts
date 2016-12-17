import { Injectable } from '@angular/core';
import { DatabaseServiceProvider } from './../../database/services/database.service';
import { User } from './../classes/users.classes';

@Injectable()
export class UsersProviderService {

    constructor(private database:DatabaseServiceProvider){}

    public authUser(user:User){
        this.database.authUser(user.email, user.password)
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            })
            .catch(() => {

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