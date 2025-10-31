import { City } from "./city"
import { PlaceLocation } from "./place-location"


export type Offer = {
  id: string,
  title: string
  type: string
  price: number
  previewImage: string,
  city: City,
  location:PlaceLocation,
  isFavorite: boolean,
  isPremium: boolean
  rating: number
}
