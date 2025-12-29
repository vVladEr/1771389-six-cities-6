import React, { useEffect, useState } from 'react';
import { ReviewComp } from './review';
import { Reviews } from '../../types/review';
import { NUMBER_OF_REVIEWS } from '../../const';

type ReviewListProps = {
  reviews: Reviews;
}

export function ReviewsList({reviews}: ReviewListProps): JSX.Element{
  const [correctReviews, setCorrectReviews] = useState<Reviews>([]);

  useEffect(() =>{
    const tmpReviews = reviews.slice().sort((a, b) =>{
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    }).slice(0, NUMBER_OF_REVIEWS);
    setCorrectReviews(tmpReviews);
  }, [reviews]);

  return(
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          correctReviews.map((review) =>
            <ReviewComp review={review} key={review.id}/>
          )
        }
      </ul>
    </React.Fragment>
  );
}
