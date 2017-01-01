import { Component, Input, OnInit} from '@angular/core';
import { GoogleAPIRoute, GoogleAPIAddressLookup } from './../classes/google-api.classes';
import { AddressLoopupProviderService } from './../services/address-lookup.service';

@Component({
    selector: 'distance-checker',
    templateUrl: 'build/modules/google-api/views/address-lookup.component.html'
})

export class AddressLookupChecker implements OnInit{

    public postcode:string = '';
    private addressLookupResults: GoogleAPIAddressLookup[];
    
    constructor(private addressLoopupProviderService:AddressLoopupProviderService){}

    ngOnInit(): void {
        this.addressLookupResults = [];
    }

    public lookupAddress():void{
        if (this.postcode) {
            this.addressLoopupProviderService.getLocationFromPostcode(this.postcode)
                .then((resolve) => {
                    this.addressLookupResults.push(resolve);
                }, (error) => {
                    window.alert('Unable to compute the distance');
                });
        } else {
            window.alert('Please fill in the postcode.');
        }
    }

}