import React from "react";
import { StarsData } from "../../components/rating/rating-stars";
import { RatingStar } from "../../components/rating/rating-star";


export function ReviewForm() : JSX.Element{
  const [reviewFormData, setReviewFormData] = React.useState(
    {
     rating: 0,
     review: ""
    }
  );

  const handleFieldChange = (evt:
    React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setReviewFormData({...reviewFormData, [name]: value});
  }

  return(
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          StarsData.map(data => <RatingStar value={data.value} title={data.title} onChangeFunction={handleFieldChange}/>)
        }
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
      onChange={handleFieldChange}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}
