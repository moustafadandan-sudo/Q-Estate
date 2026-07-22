export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold">
          Q <span className="text-cyan-500">Estate</span>
        </h1>

        <nav className="hidden gap-8 md:flex">
          <a href="#" className="hover:text-cyan-500">Projects</a>
          <a href="#" className="hover:text-cyan-500">Developers</a>
          <a href="#" className="hover:text-cyan-500">Locations</a>
          <a href="#" className="hover:text-cyan-500">Contact</a>
        </nav>

        <button className="rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-white hover:bg-cyan-600">
          List Your Project
        </button>
      </div>
    </header>
  );
}