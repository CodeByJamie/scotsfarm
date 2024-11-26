import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function findUsBtn() {
	return (
		<Link href='/about' className='flex flex-row items-center mt-2 bg-neutral-800 max-w-fit px-4 py-2 rounded-lg text-neutral-200 gap-2 hover:scale-105 duration-200 bg-opacity-80'>
			Find Us <ArrowLongRightIcon className="size-4" />
		</Link>
	);
}
