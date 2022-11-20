import { Offer } from '../../../types/offer';
import ReviewsList from '../reviews-list/reviews-list';
import Goods from '../goods/goods';
import { Reviews } from '../../../types/review';

type InfoProps = {
  offer: Offer;
  reviews: Reviews;
}

function Info({ offer, reviews }: InfoProps): JSX.Element {
  return (
    <div className="property__container container">
      <div className="property__wrapper">
        {offer.isPremium ? <div className="property__mark"><span>Premium</span></div> : null}
        <div className="property__name-wrapper">
          <h1 className="property__name">
            {offer.title}
          </h1>
          <button className="property__bookmark-button button" type="button">
            <svg className="property__bookmark-icon" width={31} height={33}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="property__rating rating">
          <div className="property__stars rating__stars">
            <span style={{ width: offer.rating * 30 }} />
            <span className="visually-hidden">Rating</span>
          </div>
          <span className="property__rating-value rating__value">{offer.rating}</span>
        </div>
        <ul className="property__features">
          <li className="property__feature property__feature--entire">
            {offer.type}
          </li>
          <li className="property__feature property__feature--bedrooms">
            {offer.bedrooms} Bedrooms
          </li>
          <li className="property__feature property__feature--adults">
            Max {offer.maxAdults} adults
          </li>
        </ul>
        <div className="property__price">
          <b className="property__price-value">€{offer.price}</b>
          <span className="property__price-text">&nbsp;night</span>
        </div>
        <div className="property__inside">
          <h2 className="property__inside-title">What`s inside</h2>
          <Goods goods={offer.goods} />
        </div>
        <div className="property__host">
          <h2 className="property__host-title">Meet the host</h2>
          <div className="property__host-user user">
            <div className={`${offer.host.isPro ? 'property__avatar-wrapper--pro' : ''} property__avatar-wrapper user__avatar-wrapper`}>
              <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width={74} height={74} alt="Host avatar" />
            </div>
            <span className="property__user-name">
              {offer.host.name}
            </span>
            <span className="property__user-status">
              {offer.host.isPro ? 'Pro' : ''}
            </span>
          </div>
          <div className="property__description">
            <p className="property__text">
              {offer.description}
            </p>
          </div>
        </div>
        <ReviewsList reviews={reviews}/>
      </div>
    </div>
  );
}

export default Info;
