import Header from './components/header';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Image
        src="/glencoe.jpg"
        alt="Image of Glencoe"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 -z-50"
      />
      <Header />
    </div>
  );
}
