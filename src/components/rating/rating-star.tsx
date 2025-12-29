import React from 'react';

type RatingStarProps = {
  starValue: number;
  title: string;
  onChangeFunction: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
}

export function RatingStar({starValue, title, onChangeFunction, isDisabled}: RatingStarProps) : JSX.Element {
  return(
    <React.Fragment>
      <input className="form__rating-input visually-hidden" name="rating" value={starValue} id={`${starValue}-stars`} type="radio"
        disabled ={isDisabled}
        onChange={onChangeFunction}
      />
      <label htmlFor={`${starValue}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </React.Fragment>
  );
}
