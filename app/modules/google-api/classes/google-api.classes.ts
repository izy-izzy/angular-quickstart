
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

export class GoogleAPIAddressLookup {
  request: string;
  result: {
    address: string;
    coortindates: GoogleAPICoordinates;
  }
}