import './spiner.css';

function Spiner(): JSX.Element {
  return (
    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
  );
}

export default Spiner;
