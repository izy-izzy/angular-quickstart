import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from './../classes/hero.class';

@Component({
    selector: 'hero-detail',
    templateUrl: 'build/modules/fuckoff/views/hero-detail.component.html',
})

export class HeroDetailComponent {

      @Input() hero: Hero;
      @Output() saveEditedHero: EventEmitter<any> = new EventEmitter();
      @Output() cancelHeroEdit: EventEmitter<any> = new EventEmitter(); 

      public saveHero(){
            this.saveEditedHero.emit();
      }

      public cancelHeroEditation(){
            this.cancelHeroEdit.emit();
      }

}