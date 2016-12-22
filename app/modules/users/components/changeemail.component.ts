import { Component, Input, OnInit} from '@angular/core';
import { UsersProviderService } from '../services/users.service';
import { User } from './../classes/users.classes';

@Component({
    selector: 'changeemail-form',
    templateUrl: 'build/modules/users/views/changeemail.component.html'
})

export class ChangeEmailComponent implements OnInit{

    user: User;     

    constructor(private usersProviderService: UsersProviderService){
        this.user = this.usersProviderService.getCleanUser();
    }

    ngOnInit(): void {}

    public changeEmail(){
        this.usersProviderService.updateEmail(this.user);
    }

}