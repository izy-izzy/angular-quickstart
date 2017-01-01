import { NgModule }             from '@angular/core';
import { RouterModule, Routes, CanActivate, CanActivateChild } from '@angular/router';
import { LoginComponent }       from './../components/login.component';
import { ForgottenPasswordComponent }     from './../components/forgottenpassword.component';
import { ChangeEmailComponent }     from './../components/changeemail.component';
import { ChangePasswordComponent }     from './../components/changepassword.component';
import { CreateUserComponent }     from './../components/createuser.component';

import { CanActivateModule } from "./../../main/shared";


var routes = [
  {path: 'loginscreen',        component: LoginComponent              },
  {path: 'forgottenpassword',  component: ForgottenPasswordComponent  },
  {path: 'user', canActivateChild: [CanActivateModule], 
    children: [
      {path: 'changeemail',        component: ChangeEmailComponent        , canActivate: [CanActivateModule]},
      {path: 'changepassword',     component: ChangePasswordComponent     , canActivate: [CanActivateModule]},
    ],  
  },
  {path: 'createuser',         component: CreateUserComponent         }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ CanActivateModule ]
})

export class UsersRouting {}