
export type PlaceLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type MarkedPlaceLocation = PlaceLocation & {
  offerId: string;
}

export type MarkedPlaceLocations = MarkedPlaceLocation[]
