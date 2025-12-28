import React from 'react';
import { ReviewComp } from './review';
import { Reviews } from '../../models/review';

type ReviewListProps = {
  reviews: Reviews;
}

export function ReviewsList({reviews}: ReviewListProps): JSX.Element{
  return(
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map((review) =>
            <ReviewComp review={review} key={review.id}/>
          )
        }
      </ul>
    </React.Fragment>
  );
}
