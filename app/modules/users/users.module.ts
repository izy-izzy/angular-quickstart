import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';

import { FormsModule }          from '@angular/forms';
import { LoginComponent }      from './components/login.component';
import { UsersRouting }     from './routes/users.routes';
import { UsersProviderService }  from './services/users.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, UsersRouting ],
  declarations: [ LoginComponent ],
  providers:    [ UsersProviderService ],
})

export class UsersModule { }