export type City = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  name: string;
}

export type Host = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
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

export type Offers = Offer[];

export type FavoriteOffer = {
  name: string;
  offers: Offers;
}

export type FavoriteOffers = FavoriteOffer[];
