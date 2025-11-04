export function GetPersentsFromRating(rating: number) : number
{
  const roundedRating = Math.round(rating)
  if (roundedRating < 1) {
      return 0;
  }
  if (roundedRating < 2) {
      return 20;
  }
  if (roundedRating < 3) {
      return 40;
  }
  if (roundedRating < 4) {
      return 60;
  }
  if (roundedRating < 5) {
      return 80;
  }
  return 100;
}

type RatingProps = {
  rating: number;
}

export function RatingStars({rating}: RatingProps) : JSX.Element
{
  return(
    <div className="offer__stars rating__stars">
      <span style={{
        width : `${GetPersentsFromRating(rating)}%`
      }}
      />
      <span className="visually-hidden">Rating</span>
    </div>
  );
}
