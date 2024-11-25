import Image from "next/image";
import Header from "../components/header";

export default function about() {
  return (
    <div className="bg-zinc-900 min-h-screen bg-opacity-50">
      <Header />
      <div className="h-1/2 w-screen -z-50">
        <Image
          src={"/edinburgh.jpg"}
          alt="Edinburg castle"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
