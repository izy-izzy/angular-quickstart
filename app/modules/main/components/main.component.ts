import { Component } from '@angular/core';
import { Router, NavigationStart} from '@angular/router';
import { AuthServiceProvider } from './../../database/shared';

@Component({
  selector: 'main-component',
  templateUrl: 'build/modules/main/views/main.component.html',
})

export class MainComponent { 

  public userLoggedIn:boolean = false;

  constructor(private authService:AuthServiceProvider, private router: Router){
    this.authService.isAuthenticated().subscribe((user) => {
      if (user) {
        this.userLoggedIn = true;
      } else {
        this.userLoggedIn = false;
      }
    });

    router.events.subscribe((event) => {
      if(
          event instanceof NavigationStart 
          && event.url !== "/loginscreen" 
          && event.url !== "/forgottenpassword"
          && event.url !== "/changeemail"
          && event.url !== "/createuser") {
          if ( !this.authService.userLoggedIn() ){
            this.router.navigate(['/loginscreen']);
          }
      }
    });
  }

}

