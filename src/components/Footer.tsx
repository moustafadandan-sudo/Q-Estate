import Image from "next/image";
import Link from "next/link";

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5 shrink-0"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z"
      />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5 shrink-0"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 3.75 10 8l-2.25 1.75a15.5 15.5 0 0 0 6.5 6.5L16 14l4.25 2.5-.75 3a2 2 0 0 1-2 1.5C9.5 21 3 14.5 3 6.5a2 2 0 0 1 1.5-2l3-.75Z"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 shrink-0"
      aria-hidden="true"
    >
      <path d="M12 2a9.8 9.8 0 0 0-8.5 14.7L2 22l5.4-1.4A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.2.8.9-3.1-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.2l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.5 7.5 0 0 1-1.4-1.8c-.1-.2 0-.4.1-.5l.4-.5.3-.5c.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.5-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M14 8h3V4.5c-.5-.1-1.8-.2-3.3-.2-3.2 0-5.4 2-5.4 5.6V13H5v4h3.3v7h4.1v-7h3.4l.6-4h-4V10c0-1.2.3-2 1.6-2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M5.2 8.6H1.8V22h3.4V8.6ZM3.5 2A2 2 0 1 0 3.5 6a2 2 0 0 0 0-4ZM22 14.3c0-4-2.1-5.9-4.9-5.9-2.3 0-3.3 1.3-3.9 2.2v-2h-3.4V22h3.4v-6.6c0-1.7.3-3.4 2.5-3.4s2.2 2 2.2 3.5V22H22v-7.7Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="inline-block">
            <Image
              src="/images/projects/logo/q-estate-logo-v2.png"
              alt="Q Estate"
             width={320}
height={120}
className="h-auto w-72 object-contain"
            />
          </Link>

          <p className="mt-6 max-w-sm leading-7 text-slate-400">
            Discover premium real estate opportunities across Qatar with
            trusted guidance, flexible payment plans, and verified projects.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 text-slate-400 transition hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
            >
              <InstagramIcon />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 text-slate-400 transition hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
            >
              <FacebookIcon />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 text-slate-400 transition hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>

          <div className="mt-5 flex flex-col gap-3 text-slate-400">
            <Link href="/" className="transition hover:text-cyan-400">
              Home
            </Link>

            <Link href="/#projects" className="transition hover:text-cyan-400">
              Projects
            </Link>

            <Link href="/#about" className="transition hover:text-cyan-400">
              About Q Estate
            </Link>

            <Link href="/#contact" className="transition hover:text-cyan-400">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Featured Projects</h3>

          <div className="mt-5 flex flex-col gap-3 text-slate-400">
            <Link
              href="/projects/skala-villas"
              className="transition hover:text-cyan-400"
            >
              Skala Villas
            </Link>

            <Link
              href="/projects/city-avenue"
              className="transition hover:text-cyan-400"
            >
              City Avenue
            </Link>

            <Link
              href="/projects/milos"
              className="transition hover:text-cyan-400"
            >
              Milos
            </Link>

            <Link
              href="/projects/marina-44"
              className="transition hover:text-cyan-400"
            >
              Marina 44
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Contact</h3>

          <div className="mt-5 space-y-4 text-slate-400">
            <div className="flex items-start gap-3">
              <LocationIcon />
              <span>Doha, Qatar</span>
            </div>

            <a
              href="tel:+97433279898"
              className="flex items-center gap-3 transition hover:text-cyan-400"
            >
              <PhoneIcon />
              <span>+974 3327 9898</span>
            </a>

            <a
              href="https://wa.me/97433279898"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition hover:text-cyan-400"
            >
              <WhatsAppIcon />
              <span>+974 3327 9898</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-center text-sm text-slate-500 md:flex-row md:items-center md:justify-between md:text-left">
          <p>© {new Date().getFullYear()} Q Estate. All rights reserved.</p>

          <p>Helping you discover premium real estate across Qatar.</p>
        </div>
      </div>
    </footer>
  );
}