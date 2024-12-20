import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ name }: { name: string }) {
  const pathname = usePathname();


  return (
    <>
      <Link
        href={`${name.toLowerCase()}`}
        className={` duration-300 ${pathname.endsWith(
          `/${name.toLowerCase()}`) ? "text-white" : "hover:text-white"
        }`}
      >
        {name}
      </Link>
    </>
  );
}
