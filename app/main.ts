import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HeroesModule } from './modules/heroes/heroes.module';
import { GoogleApiModule } from './modules/google-api/google-api.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(HeroesModule);