import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { selectCity } from '../../store/actoins';

type CityListProps = {
  cities: string[];
  selectedCity: string;
}

function CityList({ cities, selectedCity}: CityListProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((c) => (
          <li key={c} className="locations__item">
            <Link
              className={`${c === selectedCity ? 'tabs__item--active' : 'tabs__item'} locations__item-link`}
              to="#"
              onClick = {()=>{
                dispatch(selectCity(c));
              }}
            >
              <span>{c}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CityList;
