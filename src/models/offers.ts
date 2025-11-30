import { City } from './city';
import { Host } from './host';
import { PlaceLocation } from './place-location';


export type CardOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: City;
  location:PlaceLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export type Offers = {
  id: string;
  title: string;
  description: string;
  type: string;
  price: number;
  previewImage: string;
  images: string[];
  city: City;
  location: PlaceLocation;
  goods: string[];
  host: Host;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  bedrooms: number;
  maxAdults: number;
}
