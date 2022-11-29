type LiItemProps = {
  className: string;
  text: string;
  tabIndex?: number;
}

function LiItem({className, text, tabIndex}:LiItemProps): JSX.Element {
  return <li className={className} tabIndex={tabIndex}>{text}</li>;
}

export default LiItem;
