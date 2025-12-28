export enum CardType {
    Cities,
    NearPlaces,
    Favorites,
}

export function getCardListClassName(cardType : CardType) : string{
  switch (cardType) {
    case CardType.Cities :
      return 'cities__places-list places__list tabs__content';

    case CardType.NearPlaces :
      return 'near-places__list places__list';

    case CardType.Favorites :
      return 'favorites__places';

    default:
      return '';
  }
}

export function getCardClassName(cardType : CardType) : string{
  switch (cardType) {
    case CardType.Cities :
      return 'cities__card place-card';

    case CardType.NearPlaces :
      return 'near-places__card place-card';

    case CardType.Favorites :
      return 'favorites__card place-card';

    default:
      return '';
  }
}

export function getImageWrapperClassName(cardType : CardType) : string{
  switch (cardType) {
    case CardType.Cities :
      return 'cities__image-wrapper place-card__image-wrapper';

    case CardType.NearPlaces :
      return 'near-places__image-wrapper place-card__image-wrapper';

    case CardType.Favorites :
      return 'favorites__image-wrapper place-card__image-wrapper';

    default:
      return '';
  }
}

export function getImageSizes(cardType : CardType) : {width: number; height: number}{
  switch (cardType) {
    case CardType.Cities :
      return {width: 260, height: 200};

    case CardType.NearPlaces :
      return {width: 260, height: 200};

    case CardType.Favorites :
      return {width: 150, height: 110};

    default:
      return {width: 0, height: 0};
  }
}
