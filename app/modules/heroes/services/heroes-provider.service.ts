import { Injectable } from '@angular/core';
import { Hero } from '../classes/hero.class';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class HeroProviderService {

    private heroes: FirebaseListObservable<any[]>;

    constructor(private angularFire: AngularFire){
        this.heroes = angularFire.database.list('/heroes');
    }

    public getHeroes2():FirebaseListObservable<any>{
        return this.heroes;
    }

    public getHero(uid: string): FirebaseObjectObservable<any> {
            return this.angularFire.database.object('/heroes/'+uid);
    }

    private cleanHero(hero:Hero):Hero{
        var newHero:Hero = {
            id: hero.id,
            uid: hero.uid,
            name: hero.name,
            vehicle: hero.vehicle,
            reward : {
                currency: hero.reward.currency,
                value: hero.reward.value
            }
        }
        return newHero;
    }

    public saveHero(hero:Hero): Promise<void> {
        var cleanHero:Hero = this.cleanHero(hero);
        return this.getHero(cleanHero.uid)
            .update(cleanHero)
                .then((resolve) => {

                }, (error) => {

                });
    }
}