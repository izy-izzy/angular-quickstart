import { Component } from '@angular/core';
import { AuthServiceProvider } from './../../database/services/auth.service';

@Component({
  selector: 'navigation-component',
  templateUrl: 'build/modules/main/views/navigation.component.html',
})

export class NavigationComponent { 

  constructor(private authServiceProvider:AuthServiceProvider){}

  public logoutUser(){
    this.authServiceProvider.logOut();
  }
}

