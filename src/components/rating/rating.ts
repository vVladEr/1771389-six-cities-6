export function GetPersentsFromRating(rating: number) : number {
  const roundedRating = Math.round(rating);
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

