import { Hero }                 from './classes/hero.class';

import { HeroDetailComponent }  from './components/hero-detail.component';
import { HeroesListComponent }  from './components/heroes-list.component';

import { HeroHashPipe }         from './pipes/hero-hash.pipe';
import { SureSaveDirective }    from './directives/sure-save.directive';

import { HeroProviderService }  from './services/heroes-provider.service';

const CLASSES: any = [ Hero ];
const COMPONENTS: any = [ HeroDetailComponent, HeroesListComponent ];
const PIPES: any = [ HeroHashPipe ];
const DIRECTIVES: any = [ SureSaveDirective ];
const SERVICES: any = [ HeroProviderService ];

export {
    CLASSES,
    COMPONENTS,
    PIPES,
    DIRECTIVES,
    SERVICES
} 