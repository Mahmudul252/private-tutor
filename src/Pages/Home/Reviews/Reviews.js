import useReviews from '../../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews] = useReviews();

    return (
        <div className='container mb-3'>
            <h2 className="mt-5 text-center">Successful Student Reviews</h2>
            <div className='d-flex flex-column flex-lg-row gap-5 justify-content-center mt-3'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;