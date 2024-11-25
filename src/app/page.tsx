import Header from './components/header';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col relative h-screen w-screen">
      <Header />
      <Image
        src="/glencoe.jpg"
        alt="Image of Glencoe"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 -z-50"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 -z-40" />
      <div className="flex flex-col items-center justify-center h-full font-funnelSans">
        <div className="flex flex-col text-center p-2">
          <span className="text-7xl text-white font-bold drop-shadow-lg">
            Connecting the Highlands Together.  
          </span>
          <span className="text-gray-200 text-xl mt-2 drop-shadow-md">
            Pop into our shop to find some gifts for a loved one!
          </span>
        </div>
      </div>
    </div>
  );
}
