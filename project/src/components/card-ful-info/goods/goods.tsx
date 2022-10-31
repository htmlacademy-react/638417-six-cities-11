type GoodProps = {
  goods: string[];
}

function Goods({goods}: GoodProps): JSX.Element {
  return (
    <ul className="property__inside-list">
      {
        goods.map((good) => <li key={good} className="property__inside-item">{good}</li>)
      }
    </ul>
  );
}

export default Goods;
