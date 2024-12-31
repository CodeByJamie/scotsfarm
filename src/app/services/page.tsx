import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import {
  BuildingStorefrontIcon,
  RocketLaunchIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export default function About() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between">
      <Header />
      <div className="absolute inset-0 -z-10">
        <Image
          src={"/cafe.jpg"}
          alt="cafe"
          className="object-cover object-center opacity-40"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <section className="relative flex flex-col items-center justify-center h-full w-full px-4 py-16 max-w-screen-lg mx-auto">
        <div className="w-full flex flex-col gap-12 items-center justify-center text-center">
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-5xl font-semibold font-Rubik text-neutral-100 max-md:text-4xl max-sm:text-3xl">
              Our Services
            </h1>
            <p className="text-neutral-200 max-w-2xl text-lg max-md:text-base">
              At ScotsFarm we pride ourselves on offering a unique and enriching
              countryside. Whether you're a local resident, a day tripper or a
              tourist, our farm has something special for everyone.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-12 text-neutral-100 px-6 font-semibold">
            <div className="flex flex-col items-center text-center max-w-xs">
              <BuildingStorefrontIcon className="w-10 h-10 shadow-lg border-2 rounded-full p-1" />
              <h2 className="text-2xl mt-4 max-md:text-xl">The cafe</h2>
              <p className="mt-2 text-base max-md:text-sm">
                Nested in the heart of the countryside, our farm shop cafe
                combines rustic charm with modern comfort to create the perfect
                spot for relaxation and indulgence.
              </p>
            </div>
            <div className="flex flex-col items-center text-center max-w-xs">
              <RocketLaunchIcon className="w-10 h-10 border-2 rounded-full p-1" />
              <h2 className="text-2xl mt-4 max-md:text-xl">Opening Hours</h2>
              <p className="mt-2 text-base max-md:text-sm">
                We aim to offer a peaceful escape from the hustle and bustle,
                while providing a range of high-quality local products and
                services that celebrate the best of our countryside.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <UsersIcon className="w-10 h-10 border-2 rounded-full p-1" />
              <h2 className="text-2xl mt-4 max-md:text-xl">Meet The Team</h2>
              <div className="flex flex-col gap-4 mt-2 text-base max-md:text-sm">
                <span>Sophie Turner (Shop Manager)</span>
                <span>Oliver Brooks (Sales Assistant)</span>
                <span>Emma Harris (Customer Service Representative)</span>
                <span>James Fletcher (Stock Clerk)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
