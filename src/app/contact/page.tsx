'use client';
import { useState } from 'react';
import Image from 'next/image';
import Header from '../components/header';
import Footer from '../components/footer';
import * as HeroIcons from '@heroicons/react/24/outline';

export default function ContactUs() {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		setSubmitted(true);
		setEmail('');
		setMessage('');

		setTimeout(() => setSubmitted(false), 3000);
	};

	return (
		<div className='relative h-screen'>
			{/* No z-index changes to the Header */}
			<Header />
			<Footer />
			{/* Set the background image z-index to -z-20 to make sure it stays in the background */}
			<div className='absolute top-0 left-0 w-full h-full -z-20'>
				<div className='relative w-full h-full'>
					<Image src={'/castle.jpg'} alt='Edinburgh castle' className='object-cover' fill={true} />
				</div>
			</div>

			<section className='flex flex-col items-center text-zinc-100'>
				<div className='flex flex-col items-center text-zinc-50 text-opacity-80 gap-3'>
					<span className='pt-10 text-6xl font-Rubik text-white'>Contact Us</span>
					<span className='text-center max-w-lg'>
						Feel free to send us an email via the email below, or pop us a wee message using the form
						below.
					</span>
				</div>

				{/* Adjust z-index of the form container to be above the background */}
				<div className='absolute top-0 flex flex-row items-center justify-center bg-zinc-700 bg-opacity-0 h-full w-full select-none p-6 overflow-hidden z-10'>
					<div className='relative flex flex-row items-center justify-center w-full top-10'>
						{/* Ensure the form has a z-index above the background */}
						<div className='bg-zinc-700 p-8 w-1/3 bg-opacity-80 rounded-2xl flex flex-col z-20'>
							<form onSubmit={handleSubmit} className='flex flex-col gap-6'>
								<label htmlFor='email' className='flex flex-col gap-1'>
									Email Address
									<input
										type='email'
										name='address'
										id='email'
										className='rounded-lg py-2 px-1 bg-zinc-500 font-semibold outline-none'
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
									/>
								</label>
								<label htmlFor='message' className='flex flex-col gap-1'>
									Message
									<textarea
										className='rounded-lg p-2 bg-zinc-500 font-semibold outline-none'
										value={message}
										onChange={(e) => setMessage(e.target.value)}
										required
									/>
								</label>
								<button
									type='submit'
									className='bg-white text-zinc-800 py-2 px-4 rounded-lg hover:bg-zinc-300 transition'
								>
									Submit
								</button>
							</form>
							{submitted && (
								<p className='mt-4 text-green-400 font-semibold text-center'>
									Message Sent!
								</p>
							)}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
