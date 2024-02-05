import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
      <p>
        Based on the following tutorial:{' '}
        <Link
          href="https://www.youtube.com/watch?v=7jBHW98vNjw&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI"
          target="_blank"
        >
          https://www.youtube.com/watch?v=7jBHW98vNjw&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI
        </Link>
      </p>
      <h1>Special Files</h1>
      <ul>
        <li>page.tsx</li>
        <li>layout.tsx</li>
        <li>template.tsx</li>
        <li>not-found.tsx</li>
        <li>loading.tsx</li>
        <li>error.tsx</li>
      </ul>
    </div>
  );
}
