import React, { FormEvent, useEffect } from 'react';
import { StarsData } from '../../components/rating/rating-stars';
import { RatingStar } from '../../components/rating/rating-star';
import { getAuthStatus } from '../../store/user-process/selectors';
import { AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sendCommentAction } from '../../store/api-actions';
import { getIsSendingComment, getIsSendingSuccess } from '../../store/comments-process/selectors';
import { clearIsSendingSuccess } from '../../store/comments-process/comments-process';

type ReviewFormProps ={
  offerId: string;
}

export function ReviewForm({offerId}: ReviewFormProps) : JSX.Element{
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthStatus);
  const isSendingComment = useAppSelector(getIsSendingComment);
  const isCommentSentSuccessfully = useAppSelector(getIsSendingSuccess);
  const [reviewFormData, setReviewFormData] = React.useState(
    {
      rating: 0,
      review: ''
    }
  );

  useEffect(() => {
    if (isCommentSentSuccessfully){
      setReviewFormData({rating: 0, review: ''});
    }
    dispatch(clearIsSendingSuccess());
  }, [dispatch, isCommentSentSuccessfully]);

  const handleFieldChange = (evt:
    React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setReviewFormData({...reviewFormData, [name]: value});
  };

  const handleCommentFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    dispatch(sendCommentAction({
      offerId: offerId,
      comment: reviewFormData.review,
      rating: reviewFormData.rating}));
  };

  return(
    <form className="reviews__form form" method="post" onSubmit={handleCommentFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          StarsData.map((data) => (
            <RatingStar starValue={data.value} title={data.title}
              onChangeFunction={handleFieldChange} isDisabled={isSendingComment} key={`${data.value}-star`}
            />))
        }
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={isSendingComment}
        value={reviewFormData.review}
        onChange={handleFieldChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={reviewFormData.rating === 0
          || reviewFormData.review.length < 50 || reviewFormData.review.length > 300 ||
          authStatus !== AuthorizationStatus.Auth || isSendingComment}
        >Submit
        </button>
      </div>
    </form>
  );
}
