import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HeroesModule } from './modules/fuckoff/heroes.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(HeroesModule);