import { Component, Input, OnInit} from '@angular/core';
import { UsersProviderService } from '../services/users.service';
import { User } from './../classes/users.classes';

@Component({
    selector: 'forgottenpassword-form',
    templateUrl: 'build/modules/users/views/forgottenpassword.component.html'
})

export class ForgottenPasswordComponent implements OnInit{

    user: User;      

    constructor(private usersProviderService: UsersProviderService){
        this.user = this.usersProviderService.getCleanUser();
    }

    ngOnInit(): void {}

    public userPasswordReset(){
        this.usersProviderService.userPasswordReset(this.user);
    }

}