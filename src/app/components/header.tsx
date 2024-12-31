'use client';
import { Bars3Icon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import NavLink from './navLink';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
	const currentPath = usePathname();
	const [toggle, setToggle] = useState(false);
	const [dropdown, setDropDown] = useState(false);
	const [collapsed, setCollapsed] = useState(false);

	const menuVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: -20 },
	};

	const handleToggle = () => {
		setToggle(!toggle);
		setDropDown(!dropdown);
	};

	return (
		<div
			className={`sticky top-0 left-0 w-full h-fit flex justify-between items-center p-4 text-zinc-300 bg-zinc-900 bg-opacity-30 font-funnelSans px-6 z-50`}
		>
			<Link href='/' className='text-xl text-white'>
				ScotsFarm
			</Link>
			<nav className='hidden lg:flex items-center gap-12'>
				<NavLink name='About' />
				<div className={`relative flex items-center justify-center gap-2`}>
					<NavLink name='Services' />
					<ChevronRightIcon
						className={`size-4 cursor-pointer ${toggle && 'rotate-90'} duration-300`}
						onClick={handleToggle}
					/>
					<div className='absolute flex flex-col top-[2.6rem]'>
						<AnimatePresence>
							{dropdown && (
								<motion.div
									initial='hidden'
									animate='visible'
									exit='exit'
									variants={menuVariants}
									transition={{ duration: 0.3, ease: 'easeInOut' }}
									className={`flex flex-col bg-zinc-900 bg-opacity-30 gap-4 text-center z-50 p-3 select-none`}
								>
									<NavLink name='Location' />
									<NavLink name='Sustainability' />
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
				<NavLink name='Contact' />
			</nav>
			<Bars3Icon className='size-5 cursor-pointer mr-5 lg:hidden' onClick={() => setCollapsed(!collapsed)} />
			<div className='lg:hidden absolute right-0 flex flex-col items-center w-fit'>
				<AnimatePresence>
					{collapsed && (
						<motion.nav
							initial='hidden'
							animate='visible'
							exit='exit'
							variants={menuVariants}
							transition={{ duration: 0.3, ease: 'easeInOut' }}
							className='absolute flex flex-col top-7 right-0 items-center gap-6 max-md:p-2 p-3 bg-zinc-900 bg-opacity-80 rounded-b-xl z-50 '
						>
							<NavLink name='About' />
							<NavLink name='Services' />
							<NavLink name='Location' />
							<NavLink name='Sustainability' />
							<NavLink name='Contact' />
						</motion.nav>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
}
