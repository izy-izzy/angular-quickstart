import { MainComponent }        from './components/main.component'; 
import { NavigationComponent}   from './components/navigation.component';
import { DashboardComponent}    from './components/dashboard.component';

import { CanActivateModule }  from './services/can-activate-module.service';
import { CanDeactivateComponent }  from './services/can-deactivate-component.service';


const COMPONENTS: any[] = [ MainComponent, NavigationComponent, DashboardComponent ];

const SERVICES: any[] = [ CanActivateModule, CanDeactivateComponent ]

export {
    MainComponent,
    COMPONENTS,

    CanActivateModule,
    CanDeactivateComponent,
    SERVICES
}