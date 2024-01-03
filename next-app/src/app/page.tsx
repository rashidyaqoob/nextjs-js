import Image from 'next/image'
import ProductCard from './components/ProductCard';
import Link from 'next/link';
import Acc from './components/Accordion';

export default function Home() {
  return (
    <main><h1>Hello world</h1>
    <Link href='/users'>Users</Link>
    <ProductCard/>
    <Acc/>
    </main>
  )
}
