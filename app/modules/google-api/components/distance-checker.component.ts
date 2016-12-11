import { Component, Input, OnInit} from '@angular/core';
import { GoogleAPIRoute } from './../classes/google-api.classes';
import { DistanceProviderService } from './../services/distance-provider.service'; 

@Component({
    selector: 'distance-checker',
    templateUrl: 'build/modules/google-api/views/distance-checker.component.html'
})

export class DistanceChecker implements OnInit{
    
    public route: GoogleAPIRoute;
    public computedRoutes: GoogleAPIRoute[];

    constructor(private distanceProviderService:DistanceProviderService){}

    ngOnInit(): void {
        this.route = this.distanceProviderService.getRandomRoute();
        this.computedRoutes = [];
    }

    public computeDistance():void{
        this.distanceProviderService.computeDistance(this.route)
            .then((resolve) => {
                this.computedRoutes.push(resolve);
            }, (error) => {
                window.alert('Unable to compute the distance');
            });
    }

}