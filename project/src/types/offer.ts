export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  location: Location;
  name: string;
}

export type Host = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

export type Offer = {
  city: City;
  host: Host;
  location: Location;

  id: number;
  bedrooms: number;
  description: string;
  goods: string[];
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type FavoriteOffer = {
  name: string;
  offers: Offers;
}

export type Offers = Offer[];
export type FavoriteOffers = FavoriteOffer[];
export type Locations = City[];
