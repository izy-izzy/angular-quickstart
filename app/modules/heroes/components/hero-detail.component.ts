import { Component, Input, OnInit} from '@angular/core';
import { Hero } from './../classes/hero.class';
import { HeroProviderService } from '../services/heroes-provider.service';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    templateUrl: 'build/modules/heroes/views/hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit{

      hero : Hero;
      isLoaded : boolean;

      constructor( private route: ActivatedRoute,
                   private router: Router,
                   private location: Location,
                   public heroService: HeroProviderService){}

      ngOnInit(): void {
            this.isLoaded = false;
            this.route.params
                  .switchMap((params: Params) => this.heroService.getHero(params['uid']))
                  .subscribe((hero) => { 
                        this.hero = hero;
                        this.isLoaded = true;
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