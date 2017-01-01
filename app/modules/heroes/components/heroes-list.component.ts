import { Component } from '@angular/core';
import { Hero } from './../classes/hero.class';
import { HeroDetailComponent } from './hero-detail.component';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Location }                 from '@angular/common';
import { HeroProviderService } from '../services/heroes-provider.service';

@Component({
  selector: 'heroesList',
  templateUrl: 'build/modules/heroes/views/heroes-list.component.html'
})

export class HeroesListComponent { 
  public title:string;
  public heroes: Hero[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private heroService: HeroProviderService){
      this.title = "List of heroes";
  }

  ngOnInit(): void {
      this.route.params
          .switchMap((params: Params) => this.heroService.getHeroes())
          .subscribe((heroes) => {
                this.heroes = heroes;
          });
  }

}

