export enum CardType {
    Cities,
    NearPlaces,
}

export function getCardListClassName( cardType : CardType) : string{
  switch (cardType) {
    case CardType.Cities :
      return "cities__places-list places__list tabs__content"

    case CardType.NearPlaces :
      return "near-places__list places__list"

    default:
      return ""
  }
}

export function getCardClassName( cardType : CardType) : string{
  switch (cardType) {
    case CardType.Cities :
      return "cities__card place-card"

    case CardType.NearPlaces :
      return "near-places__card place-card"

    default:
      return ""
  }
}

export function getImageWrapperClassName( cardType : CardType) : string{
  switch (cardType) {
    case CardType.Cities :
      return "cities__image-wrapper place-card__image-wrapper"

    case CardType.NearPlaces :
      return "near-places__image-wrapper place-card__image-wrapper"

    default:
      return ""
  }
}
