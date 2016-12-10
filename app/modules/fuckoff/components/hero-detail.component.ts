import { Component, Input, OnInit} from '@angular/core';
import { Hero } from './../classes/hero.class';
import { HeroProviderService } from '../services/heroes-provider.service';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    templateUrl: 'build/modules/fuckoff/views/hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit{

      public hero: Hero = {
            id : 0,
            name: "",
            uid : 0,
            reward: {
                  currency : "GBP",
                  value: 0
            },
            vehicle : 'car' 
      };

      constructor( private route: ActivatedRoute,
                   private router: Router,
                   private location: Location,
                   public heroService: HeroProviderService){}

      ngOnInit(): void {
            this.route.params
            .switchMap((params: Params) => this.heroService.getHero( + params['uid']))
            .subscribe((hero) => { 
                  this.hero = hero;
            });
      }

      public saveHero(): void{
            this.heroService.saveHero(this.hero)
                  .then((success) => {
                        this.router.navigate(['/heroeslist']);
                  }, (error) => {
                        window.confirm('There has been an error during saving the hero detail.');
                  });
      }

}