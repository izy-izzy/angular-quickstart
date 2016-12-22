import { Component, Input, OnInit} from '@angular/core';
import { UsersProviderService } from '../services/users.service';
import { User } from './../classes/users.classes';

@Component({
    selector: 'changepassword-form',
    templateUrl: 'build/modules/users/views/changepassword.component.html'
})

export class ChangePasswordComponent implements OnInit{

    user: User;      

    constructor(private usersProviderService: UsersProviderService){
        this.user = this.usersProviderService.getCleanUser();
    }

    ngOnInit(): void {}

    public changePassword(){
        this.usersProviderService.changePassword(this.user);
    }

}