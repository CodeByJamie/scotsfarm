import Header from "./components/header";
import Image from "next/image";
import Footer from "./components/footer";
import FindUs from "./components/findUs";

export default function Home() {
  return (
    <div className="flex justify-center items-center relative h-screen w-screen">
      <Header />
      <Footer />
      <Image
        src="/glencoe.jpg"
        alt="Image of Glencoe"
        fill={true}
        style={{ objectFit: "cover" }}
        className="absolute top-0 left-0 -z-50"
      />
      <div className="flex flex-col items-center">
        <span className="text-7xl text-white font-bold drop-shadow-xl">
          Connecting the Countries Together.
        </span>
        <span className="text-neutral-100 font-semibold text-xl mt-2 drop-shadow-lg">
          Pop into our shop to find some gifts for a loved one!
        </span>
        <FindUs />
      </div>
    </div>
  );
}
