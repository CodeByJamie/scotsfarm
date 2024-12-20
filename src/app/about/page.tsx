import Image from 'next/image';
import Header from '../components/header';
import Footer from '../components/footer';
import { QuestionMarkCircleIcon, RocketLaunchIcon, UsersIcon } from '@heroicons/react/24/outline';

export default function About() {
	return (
		<div className='relative min-h-screen'>
			<Header />
			<Footer />
			<div className='absolute inset-0 -z-10'>
				<Image
					src={'/highlands.jpg'}
					alt='Edinburgh castle'
					className='object-cover object-center opacity-80'
					fill
					priority
					sizes="100vw"
				/>
			</div>
			<section className='relative flex flex-col items-center justify-center min-h-screen w-full px-4'>
				<div className='w-full flex flex-col gap-12'>
					<div className='flex flex-col text-center items-center justify-center w-full gap-2'>
						<h1 className='text-center text-5xl font-semibold font-Rubik text-neutral-100'>
							About us
						</h1>
						<span className='text-neutral-200 max-w-2xl'>
							Here you'll find a delightful shop filled with local produce, plants, and handmade
							goods, perfect for taking a bit of the farm home with you. Our petting zoo offers
							the chance to meet friendly farm animals, while our café serves up delicious homemade
							treats.
						</span>
					</div>
					<div className='flex flex-wrap items-center justify-between text-neutral-100 px-6 font-semibold'>
						<div className='flex flex-col items-center text-center max-w-xs'>
							<QuestionMarkCircleIcon className='w-10 h-10 shadow-lg' />
							<h2 className='text-2xl mt-4'>Who We Are</h2>
							<span className='mt-2'>
								A small farm located between Edinburgh and Carlisle that thrives on
								sustainability.
							</span>
						</div>
						<div className='flex flex-col items-center text-center max-w-xs'>
							<RocketLaunchIcon className='w-10 h-10 border-2 rounded-full p-1' />
							<h2 className='text-2xl mt-4'>Our Goal</h2>
							<span className='mt-2'>
								We aim to offer a peaceful escape from the hustle and bustle, while providing a
								range of high-quality local products and services that celebrate the best of our
								countryside.
							</span>
						</div>
						<div className='flex flex-col items-center text-center max-w-xs'>
							<UsersIcon className='w-10 h-10 border-2 rounded-full p-1' />
							<h2 className='text-2xl mt-4'>Meet The Team</h2>
							<span className='mt-2'>
								Sophie Turner (Shop Manager) <br />
								Oliver Brooks (Sales Assistant) <br />
								Emma Harris (Customer Service Representative) <br />
								James Fletcher (Stock Clerk)
							</span>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
