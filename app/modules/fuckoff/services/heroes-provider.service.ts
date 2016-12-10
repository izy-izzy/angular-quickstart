

import { Injectable } from '@angular/core';
import { Hero } from '../classes/hero.class';

@Injectable()
export class HeroProviderService {
    private id:number;
    private heroes:Hero[] = [{
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
      uid: 3,
      vehicle: 'jet',
      reward: {
          value: 0,
          currency: 'GBP'
      }
    }];

    constructor(){
        this.id = Math.floor(Math.random()*1000000);
        this.heroes.sort((heroA, heroB) => { 
            return heroA.id - heroB.id
        });
    }

    public getHeroes():Promise<Hero[]>{
        return Promise.resolve(this.heroes);
    }

    getHero(uid: number): Promise<Hero> {
        return this.getHeroes()
            .then((heroes) => { 
                return heroes.find((hero) => {
                    return hero.uid === uid
                });
            });
    }

    public saveHero(hero:Hero): Promise<boolean> {
        return this.getHero(hero.uid)
            .then((selectedHero) => {
                selectedHero = hero;
                this.printOutHeroes();
                return true;
            }, (error) =>{
                return false;
            });
    }

    private printOutHeroes(){
        console.log(this.heroes);
        var h = this.getHeroes();
        console.log(h);
    }

}