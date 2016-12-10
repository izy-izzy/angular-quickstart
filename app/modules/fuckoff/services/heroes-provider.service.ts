import { Injectable } from '@angular/core';
import { Hero } from '../classes/hero.class';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class HeroProviderService {
    private heroes:Hero[] = [{
      name: "sucker",
      id: 56,
      uid: "1",
      vehicle: 'boat',
      reward: {
        value: 400,
        currency : 'USD'
      }
    },{
      name: "lolec",
      id: 878,
      uid: "2",
      vehicle: 'car',
      reward: {
        value: 35,
        currency: 'GBP'
      }
    },{
      name: "Frederick",
      id: 4,
      uid: "3",
      vehicle: 'jet',
      reward: {
          value: 0,
          currency: 'GBP'
      }
    }];

    private heroesFromFirebase: FirebaseListObservable<any[]>;

    constructor(private angularFire: AngularFire){
        this.heroesFromFirebase = angularFire.database.list('/heroes');
        this.heroes.sort((heroA, heroB) => { 
            return heroA.id - heroB.id
        });
    }

    public getHeroes2():FirebaseListObservable<any>{
        return this.heroesFromFirebase;
    }

    public getHeroes():Promise<Hero[]>{
        return Promise.resolve(this.heroes);
    }

    public getHero(uid: string): FirebaseObjectObservable<any> {
            return this.angularFire.database.object('/heroes/'+uid);

            // .then((heroes) => { 
            //     return heroes.find((hero) => {
            //         return hero.uid === uid
            //     });
            // });
    }

    public saveHero(hero:Hero): Promise<boolean> {
        // return this.getHero(hero.uid)
        //     .then((selectedHero) => {
        //         selectedHero = hero;
        //         return true;
        //     }, (error) =>{
        //         return false;
        //     });
    }

    private printOutHeroes(){
        console.log(this.heroes);
        var h = this.getHeroes();
        console.log(h);
    }

}