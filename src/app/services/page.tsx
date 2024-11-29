import Header from '../components/header';
import Footer from '../components/footer';
import Image from 'next/image';
import { BuildingStorefrontIcon, ClockIcon, HandRaisedIcon } from '@heroicons/react/24/outline';

export default function ourServices() {
	return (
		<div className='relative min-h-screen'>
			<Header />
			<Footer />
			<div className='absolute top-0 left-0 w-full h-full -z-50'>
				<div className='relative w-full h-full'>
					<Image src={'/cafe.jpg'} alt='Edinburgh castle' className='object-cover' fill={true} />
				</div>
			</div>

			<section className='flex flex-col'>
				<div className='flex flex-col items-center text-zinc-50 gap-3'>
					<span className='pt-10 text-6xl font-Rubik text-white'>Our Services</span>
					<span className='max-w-lg text-center text-white hover:scale-110 duration-200 cursor-pointer'>At ScotsFarm, we pride ourselves on offering a unique and enriching countryside experience. Whether you're a local resident, a day-tripper, or a tourist, our farm has something special for everyone.</span>
				</div>
			</section>

			<div className='absolute top-0 flex flex-row bg-zinc-700 bg-opacity-60 h-full w-full select-none -z-10 overflow-hidden'>
				<div className='relative flex flex-col justify-center text-white w-full'>
					<div className='flex flex-row items-center justify-center gap-32 w-full px-20'>
						<div className='flex flex-col items-center max-w-xl text-center'>
							<BuildingStorefrontIcon className='size-10 border rounded-full p-2' />
							<span className='text-2xl'>The Café</span>
							<span className='text-white text-opacity-90 text-lg'>
								Nestled in the heart of the countryside, our Farm Shop Café combines
								rustic charm with modern comfort to create the perfect spot for
								relaxation and indulgence.
							</span>
						</div>
						<div className='flex flex-col items-center max-w-lg text-center'>
							<ClockIcon className='size-10 border rounded-full p-2' />
							<span className='text-2xl'>Opening Times</span>
							<span className='text-white text-opacity-90 text-lg'>
								Farm Shop (Mon - Sun) 9am - 5pm <br />
								The Café (Mon - Fri) 8am - 3pm
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
