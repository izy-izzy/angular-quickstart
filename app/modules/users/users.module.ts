import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';

import { FormsModule }          from '@angular/forms';
import { LoginComponent }      from './components/login.component';
import { ForgottenPasswordComponent }     from './components/forgottenpassword.component';
import { ChangeEmailComponent }     from './components/changeemail.component';
import { ChangePasswordComponent }     from './components/changepassword.component';
import { CreateUserComponent }     from './components/createuser.component';

import { UsersRouting }     from './routes/users.routes';
import { UsersProviderService }  from './services/users.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, UsersRouting ],
  declarations: [ LoginComponent, ForgottenPasswordComponent, ChangeEmailComponent, ChangePasswordComponent, CreateUserComponent],
  providers:    [ UsersProviderService ],
})

export class UsersModule { }