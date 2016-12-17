import { Component, Input, OnInit} from '@angular/core';
import { UsersProviderService } from '../services/users.service';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { User } from './../classes/users.classes';

@Component({
    selector: 'login-form',
    templateUrl: 'build/modules/users/views/login.component.html'
})

export class LoginComponent implements OnInit{

    isLoaded : boolean;
    user: User;      

    constructor(private usersProviderService: UsersProviderService){
        this.user = this.usersProviderService.getCleanUser();
    }

    ngOnInit(): void {

    }

    public loginUser(){
        this.usersProviderService.authUser(this.user);
    }

}