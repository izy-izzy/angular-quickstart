

import { Injectable } from '@angular/core';
import { Hero } from '../classes/hero.class';

@Injectable()
export class HeroProviderService {

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
      uid: 3
    }];

    constructor(){
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
        return this.getHero(hero.id)
            .then((selectedHero) => {
                selectedHero = hero;
                return true;
            }, (error) =>{
                return false;
            });
    }

}