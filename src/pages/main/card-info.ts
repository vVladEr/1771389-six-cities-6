import CardType from './card-type';

type CardInfo = {
    cardType: CardType;
    priceInEuros: number;
    imageName: string;
    description: string;
    isPremium : boolean;
    isFavorire?: boolean;
    rating?: number;
}

export default CardInfo;
