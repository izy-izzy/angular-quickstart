import { Component } from '@angular/core';

@Component({
  selector: 'fuck-off',
  templateUrl: 'build/modules/fuckoff/views/fuckoff.view.html',
})

export class FuckOffComponent { 
  public greetings:string;

  constructor(){
    this.greetings = "Ou yeah";
  }

  public shutUp(){
    this.greetings = "Ok ok I'm silenced, chesus."
  }
}
