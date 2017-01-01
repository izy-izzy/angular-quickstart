import { Injectable } from '@angular/core';
import { Hero } from '../classes/hero.class';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { DatabaseServiceProvider } from './../../database/shared';
import * as _ from "lodash";

@Injectable()
export class HeroProviderService {

    constructor(private angularFire: AngularFire, private database:DatabaseServiceProvider){}

    public getHeroes():FirebaseListObservable<any>{
        return this.database.getHeroes();
    }

    public getHero(uid: string): FirebaseObjectObservable<any> {
        return this.angularFire.database.object('/heroes/'+uid);
    }

    public copyHero(hero:Hero): Hero{
        var outHero : Hero = _.cloneDeep(hero);
        return outHero;
    }

    public areHeroesEqual(hero1:Hero, hero2:Hero): boolean{
        return _.isEqual(hero1, hero2);
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