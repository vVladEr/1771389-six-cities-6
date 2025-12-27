import { Navigate, useParams } from 'react-router-dom';
import { MainOffer } from './main-offer';
import { Header } from '../../components/header/header';
import { OfferList } from '../../components/offers-list/offer-list';
import { useAppDispatch } from '../../hooks';
import { fetchCommentsAction, fetchNearByOffersAction, fetchOfferAction } from '../../store/api-actions';
import { useSelector } from 'react-redux';
import { getComments, getIsLoadingOffer, getOffer, getOffersNearBy } from '../../store/offer-process/selectors';
import { useEffect } from 'react';
import { LoadingScreen } from '../loading/loading';
import { CardType } from '../../models/card-types';

function OfferPage() : JSX.Element {

  const dispatch = useAppDispatch();
  const offersNearby = useSelector(getOffersNearBy);
  const mainOffer = useSelector(getOffer);
  const comments = useSelector(getComments);
  const isOfferLoading = useSelector(getIsLoadingOffer);
  const {id} = useParams();

  if (id === undefined)
  {
    return <Navigate to="/*" replace/>;
  }

  useEffect( () =>{
    console.log("fetch data from server")
    dispatch(fetchOfferAction(id))
    dispatch(fetchNearByOffersAction(id))
    dispatch(fetchCommentsAction(id))
  }, [id]);



  if (isOfferLoading && mainOffer === undefined ){
    return <LoadingScreen />
  }

  if (mainOffer === undefined){
    return <Navigate to="/*" replace/>;
  }

  return(
    <body>
      <div className="page">
        <Header/>

        <main className="page__main page__main--offer">
          <MainOffer offersNearBy={offersNearby} mainOffer={mainOffer} comments={comments}/>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <OfferList offers={offersNearby} setActiveOfferFunc={() => {}} cardType={CardType.NearPlaces}/>
            </section>
          </div>
        </main>
      </div>
    </body>
  );
}

export default OfferPage;
