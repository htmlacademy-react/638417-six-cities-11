import { useState } from 'react';
import LiItem from '../li-item/li-item';

function Sort(): JSX.Element {
  const [sortIsOpen, setSortIsOpen] = useState(false);

  const onSortClickHandler = () => {
    setSortIsOpen((prevState)=>!prevState);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={onSortClickHandler}>
      Popular
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`${sortIsOpen ? 'places__options--opened' : ''} places__options places__options--custom`}>
        <LiItem className="places__option places__option--active" tabIndex={0} text="Popular"/>
        <LiItem className="places__option" tabIndex={0} text="Price: low to high"/>
        <LiItem className="places__option" tabIndex={0} text="Price: high to low"/>
        <LiItem className="places__option" tabIndex={0} text="Top rated first"/>
      </ul>
    </form>
  );
}

export default Sort;
