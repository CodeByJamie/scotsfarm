"use client";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
	const currentPath = usePathname();
	const [toggle, setToggle] = useState(false);
	const [dropdown, setDropDown] = useState(false);

	return (
		<div
			className={`flex flex-row justify-between items-center p-3 text-zinc-300 text-opacity-80 select-none bg-zinc-900 ${
				currentPath.endsWith("/about")
					? "bg-opacity-30"
					: "bg-opacity-10"
			} font-funnelSans z-50 px-6`}
		>
			<Link href='/' className='text-xl text-white'>
				ScotsFarm
			</Link>
			<nav className='flex flex-row items-center gap-12'>
				<Link
					href='/about'
					className={`${
						currentPath.endsWith("about")
							? "text-white"
							: "hover:text-white duration-200"
					}`}
				>
					About us
				</Link>
				<div className='relative flex flex-row items-center gap-2'>
					<Link
						href='/find-us'
						className={`${
							currentPath.endsWith("location")
								? "text-white"
								: "hover:text-white duration-200"
						}`}
					>
						Location
					</Link>
					<ChevronRightIcon
						className={`size-4 cursor-pointer ${
							toggle && "rotate-90"
						} duration-300`}
						onClick={() => {
							setToggle(!toggle);
							setDropDown(!dropdown);
						}}
					/>
					<div className='absolute flex flex-col top-[2.4rem] -translate-x-4 text-white'>
						{dropdown && (
							<div className='flex flex-col bg-zinc-900 bg-opacity-20 gap-2 rounded-b-lg text-center z-50 text-neutral-200 last:rounded-b-lg'>
								<Link
									href={"/times"}
									className='hover:bg-neutral-400 duration-200 hover:bg-opacity-20 px-2'
								>
									Opening Times
								</Link>
								<Link
									href={"/services"}
									className='hover:bg-zinc-300 duration-200 hover:bg-opacity-20 px-2 p-1'
								>
									Our Services
								</Link>
								<Link
									href={"/sustainability"}
									className='hover:bg-neutral-400 duration-200 hover:bg-opacity-20 px-2 pb-2 hover:rounded-b-lg p-1'
								>
									Sustainability
								</Link>
							</div>
						)}
					</div>
				</div>
				<Link href='/contact' className='hover:text-white duration-200'>
					Contact us
				</Link>
			</nav>
		</div>
	);
}
