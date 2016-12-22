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

    public userPasswordReset(user:User){
        this.authService.userPasswordReset(user.email)
            .then((resolve) => {
            }, (error) => {
            });
    }

    public updateEmail(user:User){
        this.authService.updateEmail(user.email, user.password, user.newEmail)
            .then((authUser) => {
                user.password;
            });
    }

    public changePassword(user:User){
        this.authService.changePassword(user.email, user.password, user.newPassword)
            .then((authUser) => {
                user.password = '';
                user.newPassword = ''
            });
    }

    public createUser(user:User){
        this.authService.createUser(user.email, user.password)
            .then((authUser) => {
                user.password = '';
            });
    }

    public getCleanUser(): User{
        var cleanUser:User = {
            email: '',
            name: '',
            password: '',
            roles: [],
            newPassword: '',
            newEmail: ''
        }
        return cleanUser;
    }

}