type ImageProps = {
  src: string;
  type: string;
}

function Image({ src, type }: ImageProps): JSX.Element {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={src} alt={type} />
    </div>
  );
}

export default Image;
