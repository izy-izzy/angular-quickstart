import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FuckOffModule } from './modules/fuckoff/fuckoff.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(FuckOffModule);