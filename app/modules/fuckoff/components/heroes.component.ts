import { Component } from '@angular/core';
import { Hero } from './../classes/hero.class';
import { HeroDetailComponent } from './hero-detail.component';
import * as _ from "lodash";

@Component({
  selector: 'heroes',
  templateUrl: 'build/modules/fuckoff/views/heroes.component.html',
})

export class HeroesComponent { 
  public title:string;
  public heroes: Hero[];
  public selectedHero : Hero = null;

  constructor(){
    this.title = "Heroes";
    this.heroes = [{
      name: "sucker",
      id: 56,
      uid: 1,
      vehicle: 'boat',
      reward: {
        value: 400,
        currency : 'USD'
      }
    },{
      name: "lolec",
      id: 878,
      uid: 2,
      vehicle: 'car',
      reward: {
        value: 35,
        currency: 'GBP'
      }
    },{
      name: "Frederick",
      id: 4,
      uid: 3
    }]

    this.heroes.sort((heroA, heroB) => { 
      return heroA.id - heroB.id
    });
  }

  public selectHero(hero:Hero){
    this.selectedHero = _.cloneDeep(hero);
  }

  public saveHero(){
    let index = this.heroes.findIndex((object) => {
      if (object.uid === this.selectedHero.uid) {
        return true;
      }
    });
    _
    this.heroes[index] = _.cloneDeep(this.selectedHero);
    this.cancelHeroEditation();
  }

  public cancelHeroEditation(){
    this.selectedHero = null;
  }
}

