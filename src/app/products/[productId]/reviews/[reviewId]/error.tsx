'use client';

export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div>
      <h1>Error in reviewId</h1>
      <p>{error.message}</p>
    </div>
  );
}
