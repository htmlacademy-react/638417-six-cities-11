export type User = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

export type Review = {
  user: User;
  id: number;
  comment: string;
  date: string;
  rating: number;
};

export type Reviews = Review[];
