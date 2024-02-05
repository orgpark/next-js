'use client';
import { useRouter } from 'next/navigation';

// only for the serverside component
// export const metadata = {
//   title: 'Order Product',
//   description: 'Product order page',
// };

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log('Placing your order');
    router.replace('/');
  };
  return (
    <div>
      <h1>Order product</h1>
      <button onClick={handleClick}>Place order</button>
    </div>
  );
}
