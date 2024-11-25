import Image from "next/image";
import Header from "../components/header";
import * as HeroIcons from "@heroicons/react/24/outline";

export default function About() {
  return (
    <div className="relative h-screen">
      <Header />
      <div className="absolute h-3/5 w-screen -z-50 top-0 left-0">
        <Image
          src={"/edinburgh.jpg"}
          alt="Edinburgh castle"
          style={{ objectFit: "cover" }}
          fill={true}
        />
        <div className="relative mt-[50dvh] h-1/3 bg-gradient-to-b from-transparent to-white w-screen" />
      </div>
      <div className="relative flex flex-row justify-between mt-[50dvh] p-8 px-24">
        <div className="flex flex-col items-center gap-2">
          <HeroIcons.CheckIcon className="size-9 border border-black rounded-full p-1 shadow-lg" />
          <span className="text-2xl">Who We Are</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <HeroIcons.CursorArrowRaysIcon className="size-9 border border-black rounded-full p-1 shadow-lg" />
          <span className="text-2xl">Our Goal</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <HeroIcons.UserIcon className="size-9 border border-black rounded-full p-1 shadow-lg" />
          <span className="text-2xl">Meet The Team</span>
        </div>
      </div>
    </div>
  );
}
