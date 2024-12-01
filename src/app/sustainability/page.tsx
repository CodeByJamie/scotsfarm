import Image from 'next/image';
import Header from '../components/header';
import Footer from '../components/footer';
import * as HeroIcons from '@heroicons/react/24/outline';

export default function Sustainability() {
	return (
		<div className='relative h-screen'>
			<Header />
			<Footer />
			<div className='absolute top-0 left-0 w-full h-full -z-10'>
				<div className='relative w-full h-full'>
					<Image src={'/castle.jpg'} alt='Edinburgh castle' className='object-cover' fill={true} />
				</div>
			</div>
			<section className='flex flex-col items-center text-zinc-100'>
				<div className='flex flex-col items-center text-zinc-50 text-opacity-80 gap-3'>
					<span className='pt-10 text-6xl font-Rubik text-white'>Our Sustainability Goal</span>
					<span className='max-w-2xl text-center'>
						By 2026, Scotsfarm Farm Shop will reduce its carbon footprint by 30% through sourcing 80%
						of its products locally, prioritizing organic and regenerative farming practices.
					</span>
				</div>
				<div className='absolute top-0 flex flex-row items-center justify-center bg-zinc-700 bg-opacity-50 h-full w-full select-none -z-10 p-6 overflow-hidden'>
					<div className='relative flex flex-row items-center justify-center w-full top-10 max-w-fit gap-28'>
						<div className='flex flex-col items-center gap-2 text-center max-w-lg'>
							<HeroIcons.FingerPrintIcon className='size-9 border border-zinc-200 rounded-full p-1 shadow-lg' />
							<span className='text-2xl'>Carbon FootPrint</span>
							<span className='font-semibold'>
								At ScotsFarm, we believe in taking responsibility for our impact on
								the planet. Our current carbon footprint reflects the challenges of
								modern farming, but we’re dedicated to continuous improvement
							</span>
						</div>
						<div className='flex flex-col items-center gap-2 text-center max-w-xl'>
							<HeroIcons.ArrowTrendingUpIcon className='size-9 border border-zinc-200 rounded-full p-1 shadow-lg' />
							<span className='text-2xl'>Regenerative Farming</span>
							<span className='font-semibold'>
								By focusing on practices like crop rotation, reduced tilling, and the
								use of cover crops, we improve soil fertility, enhance biodiversity,
								and capture more carbon from the atmosphere. These methods help us
								grow healthier produce, protect local ecosystems, and build a farm
								that thrives for generations to come.
							</span>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
