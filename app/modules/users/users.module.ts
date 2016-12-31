import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';

import { FormsModule }          from '@angular/forms';
import { COMPONENTS, SERVICES }      from './shared';

import { UsersRouting }     from './routes/users.routes';

@NgModule({
  imports:      [ BrowserModule, FormsModule, UsersRouting ],
  declarations: [ ...COMPONENTS ],
  providers:    [ ...SERVICES ],
})

export class UsersModule { }