import Image from './image/image';

type GalleryProps = {
  images: string[];
  type: string;
}

function Gallety({ images, type }: GalleryProps): JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {
          images.map((image) => <Image key={image} src={image} type={type} />)
        }
      </div>
    </div>
  );
}

export default Gallety;
