import { Component } from '@angular/core';
import { Hero } from './../classes/hero.class';
import { HeroDetailComponent } from './hero-detail.component';
import * as _ from "lodash";
import { HeroProviderService } from '../services/heroes-provider.service';

@Component({
  selector: 'heroesList',
  templateUrl: 'build/modules/fuckoff/views/heroes-list.component.html',
  providers: [HeroProviderService]
})

export class HeroesListComponent { 
  public title:string;
  public heroes: Hero[];

  constructor(private heroService:HeroProviderService){
      this.title = "List of heroes";

      console.log('FAIL');
  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then((data) => {
        this.heroes = data;
      },(error) => {
        console.log('ERROR');
      });
  }
}

