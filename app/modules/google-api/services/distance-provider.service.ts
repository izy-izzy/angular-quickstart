import { Injectable } from '@angular/core';
import { GoogleAPIRoute } from './../classes/google-api.classes';

@Injectable()
export class DistanceProviderService {

    private distanceMapService: google.maps.DistanceMatrixService;

    constructor(){
        this.distanceMapService = new google.maps.DistanceMatrixService();
    }

   public getRandomRoute(): GoogleAPIRoute{
       var route:GoogleAPIRoute = {
           computed : false,
           dirty: false,
           distance: null,
           time: null,
           route : [{
               latitude: 51.525507,
               longitude: -0.058714
           },{
               latitude : 51.5380011,
               longitude : 0.0075473
           }]
       }
       return route;
   }

   public computeDistance(route:GoogleAPIRoute): Promise<any> {
        var start = new google.maps.LatLng(route.route[0].latitude, route.route[0].longitude);
        var end = new google.maps.LatLng(route.route[1].latitude,route.route[1].longitude);

        return new Promise(resolve => {
                this.distanceMapService.getDistanceMatrix({
                origins: [start],
                destinations: [end],
                travelMode: google.maps.TravelMode.DRIVING,
                // transitOptions: TransitOptions,
                // drivingOptions: DrivingOptions,
                unitSystem: google.maps.UnitSystem.METRIC,
                avoidHighways: false,
                avoidTolls: false
            }, (response: google.maps.DistanceMatrixResponse, status: google.maps.DistanceMatrixStatus) => {
                if (status === google.maps.DistanceMatrixStatus.OK){
                    resolve(response);
                } else {
                    resolve(false);
                }
            });
        });

       
   }

}