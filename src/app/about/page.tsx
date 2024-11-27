import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import * as HeroIcons from "@heroicons/react/24/outline";

export default function About() {
	return (
		<div className='relative h-screen'>
			<Header />
			<Footer />
			<div className='absolute top-0 left-0 w-full h-full -z-10'>
				<div className='relative w-full h-full'>
					<Image
						src={"/highlands.jpg"}
						alt='Edinburgh castle'
						className='object-cover'
						fill={true}
					/>
				</div>
			</div>
			<section className='flex flex-col items-center text-zinc-100'>
				<div className='flex flex-col items-center text-zinc-300 text-opacity-80 gap-3'>
					<span className='pt-10 text-6xl font-Rubik text-white'>
						About Us
					</span>
					<span className='max-w-2xl text-center'>
						Here, you'll find a delightful shop filled with local
						produce, plants, and handmade goods, perfect for taking
						a bit of the farm home with you. Our petting zoo offers
						the chance to meet friendly farm animals, while our café
						serves up delicious homemade treats.
					</span>
				</div>
				<div className='absolute top-0 flex flex-row items-center justify-center bg-zinc-700 bg-opacity-30 h-full w-full select-none -z-10 p-6 overflow-hidden'>
					<div className='relative flex flex-row items-center justify-center w-full top-10 gap-16 border-2 max-w-fit translate-x-10'>
						<div className='flex flex-col items-center gap-2 max-w-[10rem] text-center mx-16'>
							<HeroIcons.QuestionMarkCircleIcon className='size-9 border border-zinc-200 rounded-full p-1 shadow-lg' />
							<span className='text-2xl'>Who We Are</span>
							<span className='font-semibold'>
								A small farm located between Edinburgh and
								Carlisle who thrives on sustainability.
							</span>
						</div>
						<div className='flex flex-col items-center gap-2 max-w-xs text-center'>
							<HeroIcons.TrophyIcon className='size-9 border border-zinc-200 rounded-full p-1 shadow-lg' />
							<span className='text-2xl'>Our Goal</span>
							<span className='font-semibold'>
								We aim to offer a peaceful escape from the
								hustle and bustle, while providing a range of
								high-quality local products and services that
								celebrate the best of our countryside.
							</span>
						</div>
						<div className='flex flex-col items-center gap-2'>
							<HeroIcons.UsersIcon className='size-9 border border-zinc-200 rounded-full p-1 shadow-lg' />
							<span className='text-2xl'>Meet The Team</span>
							<div className='flex flex-col items-center gap-2 font-semibold'>
								<span>Sophie Turner (Shop Manager)</span>
								<span>Oliver Brooks (Sales Assistant)</span>
								<span>
									Emma Harris (Customer Service
									Representative)
								</span>
								<span>James Fletcher (Stock Clerk)</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
