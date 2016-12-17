import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MainModule } from './modules/main/main.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(MainModule);