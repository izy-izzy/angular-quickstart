import { Injectable } from '@angular/core';
import { GoogleAPIRoute, GoogleAPIAddressLookup } from './../classes/google-api.classes';

@Injectable()
export class AddressLoopupProviderService {

    private geocoderService: google.maps.Geocoder;

    constructor(){
        this.geocoderService = new google.maps.Geocoder();
    }

   public getLocationFromPostcode(postcode:string): Promise<any> {

        var geocodeRequest: google.maps.GeocoderRequest = {
            address: postcode
        }
       
        return new Promise(resolve => {
            this.geocoderService.geocode(geocodeRequest, (response: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => {
                if (status === google.maps.GeocoderStatus.OK && (response.length > 0)){
                     var res:GoogleAPIAddressLookup = { 
                        request: postcode,
                        result: {
                            address: response[0].formatted_address,
                            coortindates: {
                                longitude: response[0].geometry.location.lng(),
                                latitude: response[0].geometry.location.lat()
                            }
                        }   
                    }
                    resolve(res);
                } else {
                    var res:GoogleAPIAddressLookup = { 
                        request: postcode,
                        result: {
                            address: null,
                            coortindates: {
                                longitude: null,
                                latitude: null
                            }
                        }   
                    }
                    resolve(res);
                }
            });
        });

       
   }

}