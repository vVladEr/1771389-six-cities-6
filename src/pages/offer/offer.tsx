import { Navigate, useParams } from 'react-router-dom';
import { MainOffer } from '../../components/main-offer/main-offer';
import { Header } from '../../components/header/header';
import { OfferList } from '../../components/offers-list/offer-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCommentsAction, fetchNearByOffersAction, fetchOfferAction } from '../../store/api-actions';
import { getIfOfferFound, getIsLoadingOffer, getOffer, getOffersNearBy } from '../../store/offer-process/selectors';
import { useEffect } from 'react';
import { LoadingScreen } from '../loading/loading';
import { CardType } from '../../types/card-types';
import { switchFavoriteStatusInNearByOffer } from '../../store/offer-process/offer-process';
import { switchFavoriteStatusInOffers } from '../../store/offers-process/offers-process';
import { AppRoute } from '../../const';
import { getComments } from '../../store/comments-process/selectors';

function OfferPage() : JSX.Element {

  const dispatch = useAppDispatch();
  const offersNearby = useAppSelector(getOffersNearBy);
  const mainOffer = useAppSelector(getOffer);
  const comments = useAppSelector(getComments);
  const isOfferLoading = useAppSelector(getIsLoadingOffer);
  const isOfferFound = useAppSelector(getIfOfferFound);
  const {id} = useParams();

  useEffect(() =>{
    if (id){
      dispatch(fetchOfferAction(id));
      dispatch(fetchNearByOffersAction(id));
      dispatch(fetchCommentsAction(id));
    }

  }, [dispatch, id]);


  if (isOfferLoading){
    return <LoadingScreen />;
  }

  if (!isOfferFound){
    return <Navigate to={AppRoute.NotFound} replace/>;
  }

  const handleBookmarkClick = (nearByOfferId: string) => {
    dispatch(switchFavoriteStatusInNearByOffer(nearByOfferId));
    dispatch(switchFavoriteStatusInOffers(nearByOfferId));
  };

  return(
    <div className="page">
      <Header/>

      <main className="page__main page__main--offer">
        <MainOffer offersNearBy={offersNearby} mainOffer={mainOffer!} comments={comments}/>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OfferList offers={offersNearby} setActiveOfferFunc={() => {}} cardType={CardType.NearPlaces}
              onBookmarkClick={handleBookmarkClick}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
