import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function footer() {
	return (
		<div className='absolute bottom-0 bg-zinc-800 bg-opacity-40 w-screen p-3 px-5 font-funnelSans'>
			<div className='relative flex flex-row items-center justify-between'>
				<div className='flex flex-col'>
					<span className='text-neutral-400'>
						ScotsFarm
					</span>
					<span className='text-neutral-400'>
						scotsfarm@gmail.com
					</span>
				</div>
					<Link
						href={"/contact"}
						className='flex flex-row items-center gap-2 text-neutral-300 border border-transparent hover:border-b-neutral-400 duration-200'
					>
						Contact us
						<ArrowTopRightOnSquareIcon className='size-4' />
					</Link>
			</div>
            <div className="relative flex flex-row w-full justify-center text-neutral-300 gap-8">
                <Link href={'/privacy'}>Privacy Policy</Link>
                <Link href={'/terms'}>Terms & Conditions </Link>
            </div>
			<span className="absolute bottom-2 left-5 text-neutral-500 text-sm">All Rights Reserved. 2024.</span>
		</div>
	);
}
