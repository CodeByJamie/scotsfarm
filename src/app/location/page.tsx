import Header from '../components/header';
import Footer from '../components/footer';
import Image from 'next/image';
import * as HeroIcons from '@heroicons/react/24/outline';

export default function location() {
	return (
		<div className='relative flex flex-col min-h-screen'>
			<Header />
			<div className='absolute top-0 left-0 w-full h-full -z-10'>
				<div className='relative w-full h-full'>
					<Image src={'/highlandStone.jpg'} alt='Edinburgh castle' className='object-cover' fill={true} />
				</div>
			</div>
			<div className='absolute top-0 flex flex-row items-center justify-between bg-zinc-700 bg-opacity-45 h-full w-full select-none -z-10 p-6 overflow-hidden text-white px-40'>
					<div className='flex flex-col items-center gap-2 text-center max-w-lg'>
						<HeroIcons.MapPinIcon className='size-9 border border-zinc-200 rounded-full p-1 shadow-lg' />
						<span className='text-2xl'>Location</span>
						<span className='font-semibold'>
							We are located on the west side of the town of Innerleithen. <br />
							The farmshop & cafe is sign posted, follow the sings up the single track road.
						</span>
					</div>
					<div className='flex flex-col items-center gap-2 text-center'>
						<Image src={'/map.png'} alt='map of the farm' width={800} height={0} className='rounded-3xl' />
					</div>
			</div>
			<Footer />
		</div>
	);
}
