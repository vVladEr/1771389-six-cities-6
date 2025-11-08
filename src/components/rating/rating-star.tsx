import React from 'react';

type RatingStarProps = {
  value: number;
  title: string;
  onChangeFunction: (evt: React.ChangeEvent<HTMLInputElement>) => void;

}

export function RatingStar({value, title, onChangeFunction}: RatingStarProps) : JSX.Element {
  return(
    <React.Fragment>
      <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio"
        onChange={onChangeFunction}
      />
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </React.Fragment>
  );
}
