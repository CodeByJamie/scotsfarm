import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";

export default function location() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Header />
      <div className='absolute top-0 left-0 w-full h-full -z-10'>
				<div className='relative w-full h-full'>
					<Image
						src={"/highlandStone.jpg"}
						alt='Edinburgh castle'
						className='object-cover'
						fill={true}
					/>
				</div>
			</div>
			<div className='absolute top-0 flex flex-row items-center justify-center bg-zinc-700 bg-opacity-45 h-full w-full select-none -z-10 p-6 overflow-hidden'> </div>
      <Footer />
    </div>
  );
}
