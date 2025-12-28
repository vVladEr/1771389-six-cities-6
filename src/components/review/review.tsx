import { Review } from '../../types/review';
import { GetPersentsFromRating } from '../rating/rating';


type ReviewProps = {
  review: Review;
}

const monthNames = ['January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function ReviewComp({review}: ReviewProps): JSX.Element{
  const parsedReview: Review = {
    id: review.id,
    date: new Date(review.date),
    user: review.user,
    comment: review.comment,
    rating: review.rating,
  };
  return(
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={parsedReview.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {parsedReview.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${GetPersentsFromRating(parsedReview.rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {parsedReview.comment}
        </p>
        <time className="reviews__time" dateTime={parsedReview.date.toDateString()}>
          {`${monthNames[parsedReview.date.getMonth()]} ${parsedReview.date.getFullYear()}`}
        </time>
      </div>
    </li>
  );
}
