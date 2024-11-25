import Link from "next/link";

export default function header() {
  return (
    <div className="flex flex-row justify-between items-center p-3 text-white select-none">
      <Link href="/" className="text-xl">
        <span className="text-sky-300 font-funnelSans">Scots</span>
        Farm
      </Link>
      <nav className="flex flex-row items-center gap-8">
        <Link href="/about">About us</Link>
        <Link href="/find-us">Location</Link>
        <Link href="" className="bg-zinc-100 p-2 rounded-3xl text-black">
          Contact us
        </Link>
      </nav>
    </div>
  );
}
