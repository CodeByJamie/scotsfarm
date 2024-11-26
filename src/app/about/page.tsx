import Image from "next/image";
import Header from "../components/header";
import * as HeroIcons from "@heroicons/react/24/outline";

export default function About() {
    return (
        <div className="relative h-screen overflow-hidden">
            <Header />

            <div className="absolute top-0 left-0 w-full -z-10">
                <div className="relative w-full h-[850px]">
                    <Image
                        src={"/edinburgh.jpg"}
                        alt="Edinburgh castle"
                        className="object-cover"
                        fill={true}
                    />
                    <div className="absolute bottom-0 left-0 bg-gradient-to-b from-transparent to-white w-screen h-1/3" />
                </div>
            </div>

            <div className="relative flex flex-row justify-between px-24 pt-[55dvh] text-zinc-100 bg-zinc-300 bg-opacity-30 h-full ">
                <div className="flex flex-col items-center gap-2">
                    <HeroIcons.QuestionMarkCircleIcon className="size-9 border border-zinc-200 rounded-full p-1 shadow-lg" />
                    <span className="text-2xl">Who We Are</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <HeroIcons.TrophyIcon className="size-9 border border-zinc-200 rounded-full p-1 shadow-lg" />
                    <span className="text-2xl">Our Goal</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <HeroIcons.UsersIcon className="size-9 border border-zinc-200 rounded-full p-1 shadow-lg" />
                    <span className="text-2xl">Meet The Team</span>
                </div>
            </div>
        </div>
    );
}
