function GetPersentsFromRating(rating: number) : number
{
  const roundedRating = Math.round(rating)
  if (roundedRating < 2) {
      return 0;
  }
  if (roundedRating < 4) {
      return 20;
  }
  if (roundedRating < 6) {
      return 40;
  }
  if (roundedRating < 8) {
      return 60;
  }
  if (roundedRating < 10) {
      return 80;
  }
  return 100;
}

type RatingProps = {
  rating: number;
}

export function Rating({rating}: RatingProps) : JSX.Element
{
  return(
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{width: `${GetPersentsFromRating(rating)}%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}
