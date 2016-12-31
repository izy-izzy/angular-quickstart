import { GoogleAPIAddressLookup, GoogleAPICoordinates, GoogleAPIRoute } from './classes/google-api.classes';
import { DistanceChecker }      from './components/distance-checker.component';
import { AddressLookupChecker } from './components/address-lookup.component';
import { DistanceProviderService }  from './services/distance-provider.service';
import { AddressLoopupProviderService }  from './services/address-lookup.service';

const CLASSES: any = { GoogleAPIAddressLookup, GoogleAPICoordinates, GoogleAPIRoute };
const COMPONENTS: any = { DistanceChecker, AddressLookupChecker }
const SERVICES: any = { DistanceProviderService, AddressLoopupProviderService };

export {
    CLASSES,
    COMPONENTS,
    SERVICES
}