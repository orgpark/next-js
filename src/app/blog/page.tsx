import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Blog',
  },
  description: 'Blog page',
};

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
}
