"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const currentPath = usePathname();

    return (
        <div
            className={`flex flex-row justify-between items-center p-3 text-zinc-200 select-none bg-zinc-900 bg-opacity-10 font-funnelSans z-50`}
        >
            <Link href="/" className="text-xl">
                ScotsFarm
            </Link>
            <nav className="flex flex-row items-center gap-8">
                <Link
                    href="/about"
                    className={`${currentPath === "/about" && "text-white"}`}
                >
                    About us
                </Link>
                <Link href="/find-us">Location</Link>
                <Link href="/contact">Contact us</Link>
            </nav>
        </div>
    );
}
