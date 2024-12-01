import Header from '../components/header';

export default function privacyPolicy() {
	return (
		<div className='flex flex-col min-h-screen -z-10'>
			<Header />
			<div className='flex flex-col gap-8 items-center mt-8'>
				<h1 className='font-Rubik font-bold text-3xl'>ScotsFarm Privacy Policy</h1>
				<span className='max-w-6xl text-center'>
					At ScotsFarm, we are committed to protecting your privacy and ensuring your personal data is handled
					responsibly. This privacy policy explains how we collect, use, and safeguard your information when
					you visit our website or interact with our services.
				</span>
				<div className='px-24 flex flex-col gap-6'>
					<span className=''>
						<span className='font-bold'>
							1. Information We Collect We may collect the following information to provide
							and improve our services:
						</span>
						<br />
						Personal Information: When you contact us through the website (e.g., via a contact form),
						we may collect your name, email address, and any other details you provide. <br />
						Usage Data: Information about how you interact with our website, such as IP address,
						browser type, pages visited, and time spent on the site, may be collected via cookies or
						similar technologies.
					</span>
					<span>
						<span className='font-bold'>2. How We Use Your Information</span> <br />
						To respond to inquiries and provide customer support. <br /> To improve the usability and
						functionality of our website. <br />
						To inform you about updates, offers, or services (only if you have opted in to receive
						such communications). <br /> To monitor and analyze website performance and enhance user
						experience.
					</span>
					<span>
						<span className='font-bold'>3. Sharing Your Information</span> <br />
						We respect your privacy and will never sell or rent your personal information. Your data
						will only be shared: <br /> With service providers assisting us with website analytics,
						email hosting, or related services, all of whom are required to keep your information
						confidential. <br /> If required by law or to protect our legal rights.
					</span>
					<span>
						<span className='font-bold'>4. Data Security</span> <br />
						We take reasonable measures to protect your personal data from unauthorized access,
						alteration, or disclosure. However, no internet transmission or storage system can be
						guaranteed 100% secure.
					</span>
					<span>
						<span className='font-bold'>5. Third-Party Links</span> <br />
						Our website may contain links to third-party websites (e.g., tourist information). We are
						not responsible for the privacy practices or content of these websites. Please review
						their privacy policies when visiting.
					</span>
					<span>
						<span className='font-bold'>6. Contact Us</span> <br />
						If you have any questions about this privacy policy or how we handle your data, please
						contact us:
						<br />
						Email: scotsfarm@gmail.com
					</span>
				</div>
			</div>
		</div>
	);
}
