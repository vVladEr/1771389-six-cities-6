import { PlaceLocation } from './place-location';

export type City = {
  name: string;
  location: PlaceLocation;
}

export const Amsterdam: City = {
  name: 'Amsterdam',
  location : {
    latitude : 52.38,
    longitude : 4.85,
    zoom : 13
  }
};
