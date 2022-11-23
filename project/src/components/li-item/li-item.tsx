type LiItemProps = {
  className: string;
  text: string;
}

function LiItem({className, text}:LiItemProps): JSX.Element {
  return <li className={className}>{text}</li>;
}

export default LiItem;
