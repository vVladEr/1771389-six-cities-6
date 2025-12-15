import { useParams } from 'react-router-dom';
import { CardOffer, Offer } from '../../models/offers';
import { MainOffer } from './main-offer';
import { Header } from '../../components/header/header';
import { OfferList } from '../../components/offers-list/offer-list';
import { OffersCardPrefix } from '../../models/card-prefixes';

type OfferPageProps = {
  fullOffers: Offer[];
}

function OfferPage({fullOffers}: OfferPageProps) : JSX.Element {
  const {id} = useParams();
  const offer: Offer | undefined = fullOffers.find((possibleOffer) => possibleOffer.id === id);
  const offersNearBy: CardOffer[] = [];
  return(
    <body>
      <div className="page">
        <Header/>

        <main className="page__main page__main--offer">
          <MainOffer mainOffer={offer} offersNearBy={offersNearBy}/>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <OfferList offers={offersNearBy} setActiveOfferFunc={() => {}} cardPrefix={OffersCardPrefix.NearPlaces}/>
            </section>
          </div>
        </main>
      </div>
    </body>
  );
}

export default OfferPage;
