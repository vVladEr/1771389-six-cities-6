import { Navigate, useParams } from 'react-router-dom';
import { MainOffer } from './main-offer';
import { Header } from '../../components/header/header';
import { OfferList } from '../../components/offers-list/offer-list';
import { OffersCardPrefix } from '../../models/card-prefixes';
import { useAppDispatch } from '../../hooks';
import { fetchCommentsAction, fetchNearByOffersAction, fetchOfferAction } from '../../store/api-actions';
import { useSelector } from 'react-redux';
import { getOffersNearBy } from '../../store/offer-process/selectors';

function OfferPage() : JSX.Element {
  const {id} = useParams();
  if (id === undefined)
    {
      return <Navigate to="*"/>;
    }

  const dispatch = useAppDispatch();
  dispatch(fetchOfferAction(id))
  dispatch(fetchNearByOffersAction(id))
  dispatch(fetchCommentsAction(id))

  const offersNearby = useSelector(getOffersNearBy);

  return(
    <body>
      <div className="page">
        <Header/>

        <main className="page__main page__main--offer">
          <MainOffer offersNearBy={offersNearby}/>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <OfferList offers={offersNearby} setActiveOfferFunc={() => {}} cardPrefix={OffersCardPrefix.NearPlaces}/>
            </section>
          </div>
        </main>
      </div>
    </body>
  );
}

export default OfferPage;
