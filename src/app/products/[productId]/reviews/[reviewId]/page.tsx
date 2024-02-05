import { notFound } from 'next/navigation';

const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};

export default function ReviewDetails({ params }: { params: { reviewId: string; productId: string } }) {
  const random = getRandomInt(2); // 0 or 1
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  if (random === 1) {
    throw new Error('Error loading review');
  }
  return (
    <div>
      <h1>
        Review {params.reviewId} for Product {params.productId}
      </h1>
    </div>
  );
}
