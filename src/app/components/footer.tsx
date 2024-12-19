import Link from "next/link";

export default function Footer() {
  return (
    <div className="absolute flex bottom-0 bg-zinc-800 bg-opacity-40 w-screen p-3 px-5 font-funnelSans z-50 text-neutral-100 justify-between">
      <div className="flex flex-col items-start gap-1">
        <span>ScotsFarm</span>
        <span>scotsfarm@gmail.com</span>
        <span className="text-neutral-300">All rights Reserved. 2024.</span>
      </div>
      <div className="flex flexx-col items-end">
        <div className="flex flex-row items-center gap-4">
          <Link href={'/privacy'}>Privacy Policy</Link>
          <Link href={'/services'}>Terms & Conditions</Link>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <Link href={'/contact'}>Contact Us</Link>
      </div>
    </div>
  );
}
