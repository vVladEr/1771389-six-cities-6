import { PlaceLocation } from './place-location';

export type City = {
  name: string;
  location: PlaceLocation;
}

export const Paris: City = {
  'name': 'Paris',
  'location': {
    'latitude': 48.85661,
    'longitude': 2.351499,
    'zoom': 11
  }
};

export const Cologne: City = {
  'name': 'Cologne',
  'location': {
    'latitude': 50.938361,
    'longitude': 6.959974,
    'zoom': 11
  }
};

export const Brussels: City = {
  'name': 'Brussels',
  'location': {
    'latitude': 50.846557,
    'longitude': 4.351697,
    'zoom': 11
  }
};


export const Amsterdam: City = {
  name: 'Amsterdam',
  location : {
    latitude : 52.38,
    longitude : 4.85,
    zoom : 11
  }
};

export const Hamburg: City = {
  'name': 'Hamburg',
  'location': {
    'latitude': 53.550341,
    'longitude': 10.000654,
    'zoom': 11
  }
};

export const Dusseldorf: City = {
  'name': 'Dusseldorf',
  'location': {
    'latitude': 51.225402,
    'longitude': 6.776314,
    'zoom': 11
  }
};

export type Cities = City[];

export const DefaultCities : Cities = [Paris, Cologne, Brussels, Amsterdam, Hamburg, Dusseldorf];
