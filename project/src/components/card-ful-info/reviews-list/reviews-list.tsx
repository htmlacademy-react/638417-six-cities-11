import { useAppSelector } from '../../../hooks';
import NewCommentForm from '../../new-comment-form/new-comment-form';
import ReviewItem from './review/review';


function ReviewsList(): JSX.Element {
  const reviews = useAppSelector((state) => state.reviews); // все города
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review)=><ReviewItem key={review.id} review={review}/>)}
      </ul>
      <NewCommentForm />
    </section>
  );
}

export default ReviewsList;
