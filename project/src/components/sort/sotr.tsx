import { useState, useEffect } from 'react';
import { SortType } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSort } from '../../store/actoins';

function Sort(): JSX.Element {
  const sort = useAppSelector((state) => state.sort); // выбранный тип сортировки
  const [sortListIsOpen, setSortIsOpen] = useState(false);
  const [sortTypes, setsortTypes] = useState<string[]>();
  const dispatch = useAppDispatch();

  const onSortClickHandler = () => {
    setSortIsOpen((prevState)=>!prevState);
  };

  useEffect(()=>{
    setsortTypes(Object.values(SortType));
  },[]);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={onSortClickHandler}>
        {sort}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`${sortListIsOpen ? 'places__options--opened' : ''} places__options places__options--custom`}>
        {sortTypes && sortTypes.map((st)=>(
          <li
            key={st}
            className={`${st === sort ? 'places__option--active' : ''} places__option`}
            tabIndex={0}
            onClick = {()=>{
              dispatch(setSort(st));
              setSortIsOpen(false);
            }}
          >{st}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sort;
