import React from "react";
import { ReviewComp } from "./review";
import { Reviews } from "../../models/review";

type ReviewsListProps = {
  offerId: string
}

export function ReviewsList({offerId}: ReviewsListProps): JSX.Element{

  const reviews: Reviews = [];
  return(
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        {
          reviews.map(review =>
            <ReviewComp review={review} key={review.id}/>
          )
        }
      </ul>
    </React.Fragment>
  );
}
