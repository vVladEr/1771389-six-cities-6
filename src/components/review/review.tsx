import { Review } from "../../models/review";
import { GetPersentsFromRating } from "../rating/rating";


type ReviewProps = {
  review: Review
}

const monthNames = ['January', 'February', 'March', 'April',
   'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function ReviewComp({review}: ReviewProps): JSX.Element{
  return(
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${GetPersentsFromRating(review.rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={review.date.toDateString()}>
          {`${monthNames[review.date.getMonth()]} ${review.date.getFullYear()}`}April 2019
          </time>
      </div>
    </li>
  );
}
