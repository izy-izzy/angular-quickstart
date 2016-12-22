import { Component, Input, OnInit} from '@angular/core';
import { UsersProviderService } from '../services/users.service';
import { User } from './../classes/users.classes';

@Component({
    selector: 'createuser-form',
    templateUrl: 'build/modules/users/views/createuser.component.html'
})

export class CreateUserComponent implements OnInit{

    user: User;      

    constructor(private usersProviderService: UsersProviderService){
        this.user = this.usersProviderService.getCleanUser();
    }

    ngOnInit(): void {}

    public createUser(){
        this.usersProviderService.createUser(this.user);
    }

}