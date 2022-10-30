import { useParams } from 'react-router-dom';
import { Offer, Offers } from '../../types/offer';
import NewCommentForm from '../new-comment-form/new-comment-form';
import Gallery from './gallery/gallery';
import Goods from './goods/goods';

type CardFulInfoProps = {
  offers: Offers;
}

type OfferItemParams = {
  id: string;
}

function CardFulInfo({ offers }: CardFulInfoProps): JSX.Element {

  const params = useParams<keyof OfferItemParams>() as OfferItemParams;
  const { id } = params;
  const numberId = parseInt(id, 10);
  const offer = offers.find((card) => card.id === numberId) as Offer;

  return (
    <section className="property">
      <div className="property__gallery-container container">
        <div className="property__gallery">
          <Gallery images={offer.images} type={offer.type} />
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          {offer.isPremium ? <div className="property__mark"><span>Premium</span></div> : ''}
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
          <section className="property__reviews reviews">
            <h2 className="reviews__title">Reviews · <span className="reviews__amount">1</span></h2>
            <ul className="reviews__list">
              <li className="reviews__item">
                <div className="reviews__user user">
                  <div className="reviews__avatar-wrapper user__avatar-wrapper">
                    <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width={54} height={54} alt="Reviews avatar" />
                  </div>
                  <span className="reviews__user-name">
                    Max
                  </span>
                </div>
                <div className="reviews__info">
                  <div className="reviews__rating rating">
                    <div className="reviews__stars rating__stars">
                      <span style={{ width: '80%' }} />
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <p className="reviews__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
                </div>
              </li>
            </ul>
            <NewCommentForm />
          </section>
        </div>
      </div>
      <section className="property__map map" />
    </section>
  );
}

export default CardFulInfo;
