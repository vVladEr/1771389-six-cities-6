export enum AppRoute {
  Login = '/login',
  Root = '/',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '/*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT =
  'img/pin.svg';


export const URL_MARKER_CURRENT =
  'img/pin-active.svg';

export enum APIRoute {
  Offers = '/offers',
  Favorites = '/favorite',
  Comments = '/comments',
    Login = '/login',
  Logout = '/logout'
}

export enum NameSpaces {
  User = 'USER',
  Offers = 'OFFERS',
  Offer = 'OFFER',
  Comments = 'COMMENTS',
  Favorites = 'FAVORITES',
}

export enum BookmarkPrefix {
  Card = 'place-card',
  Offer = 'offer'
}

export const NUMBER_OF_REVIEWS : number = 10;
export const NUMBER_OF_IMAGES : number = 6;
