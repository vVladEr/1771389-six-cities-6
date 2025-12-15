import { Host } from './host';

export type Review =
{
  id: string;
  date: Date;
  user: Host;
  comment: string;
  rating: number;
}

export type Reviews = Review[]
