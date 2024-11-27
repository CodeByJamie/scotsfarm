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
      <Footer />
    </div>
  );
}
