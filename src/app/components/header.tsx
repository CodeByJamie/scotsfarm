export default function header() {
  return (
    <div className="flex flex-row justify-between items-center p-3 text-white select-none">
      <a href="/" className="text-xl">
        <span className="text-brandCol font-funnelSans">Scots</span>
        Farm
      </a>
      <nav className="flex flex-row items-center gap-8">
        <a href="/about-us">About us</a>
        <a href="/find-us">Location</a>
        <a href="" className="bg-zinc-100 p-2 rounded-3xl text-brandCol">
          Contact us
        </a>
      </nav>
    </div>
  );
}
