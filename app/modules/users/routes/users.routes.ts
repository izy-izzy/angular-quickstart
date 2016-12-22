import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }       from './../components/login.component';
import { ForgottenPasswordComponent }     from './../components/forgottenpassword.component';
import { ChangeEmailComponent }     from './../components/changeemail.component';
import { ChangePasswordComponent }     from './../components/changepassword.component';
import { CreateUserComponent }     from './../components/createuser.component';


var routes = [
  {path: 'loginscreen',        component: LoginComponent },
  {path: 'forgottenpassword',  component: ForgottenPasswordComponent },
  {path: 'changeemail',        component: ChangeEmailComponent },
  {path: 'changepassword',     component: ChangePasswordComponent },
  {path: 'createuser',         component: CreateUserComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class UsersRouting {}