import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { Offer, Offers } from '../../types/offer';
import Map from '../map/map';
import NearPlaces from '../near-places/near-places';
import Gallery from './gallery/gallery';
import Info from './info/info';

type OfferItemParams = {
  id: string;
}

function CardFulInfo(): JSX.Element {
  // STORE
  const selectedCity = useAppSelector((state) => state.selectedCity); // выбранный город
  const offers = useAppSelector((state) => state.offers); // все города

  // useParams
  const params = useParams<keyof OfferItemParams>() as OfferItemParams;
  const { id } = params; // id оффера снятый с адресной строки /offer/id
  const numberId = parseInt(id, 10);

  //STATE
  const [nearPlaces, setnearPlaces] = useState<Offers | undefined>(undefined); // выбранные/отфильтрованные офферы по названию города
  const [offer, setOffer] = useState<Offer | undefined>(undefined); // выбранные/отфильтрованные офферы по названию города

  //HOOKS
  // ищет текущий офер по id из адресной строки
  useEffect(()=>{
    setOffer(offers.find((o) => o.id === numberId) as Offer);
  },[offers, numberId]);

  // фильтрует по выбранному городу
  useEffect(()=>{
    setnearPlaces(offers.filter((o)=>(o.city.name === selectedCity)));
  },[offers, selectedCity]);

  // тут нужно будет ужадять текущий оффер из массива совпадений по городу. useState + useEffect

  return (
    <>
      <section className="property">
        {offer && <Gallery images={offer.images} type={offer.type} />}
        {offer && <Info offer={offer}/>}
      </section>
      <section className="property__map map">
        {nearPlaces && <Map city={nearPlaces[0].city} selectedCity={selectedCity} hoveredPoint={undefined}/>}
      </section>
      <NearPlaces nearPlaces={nearPlaces} />
    </>
  );
}

export default CardFulInfo;
