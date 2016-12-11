
export class GoogleAPICoordinates {
  longitude: number;
  latitude: number;
}

export class GoogleAPIRoute {
    computed: boolean;
    dirty: boolean;
    distance: number; // metres
    time: number; // milliseconds
    route: GoogleAPICoordinates[];
}