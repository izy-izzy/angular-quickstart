import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from './../classes/hero.class';

@Pipe({
    name: 'heroHash'
})

export class HeroHashPipe implements PipeTransform {
    transform( hero: Hero ):any {
        return "#" + hero.uid + hero.id*4 + hero.vehicle; 
    }
      

}