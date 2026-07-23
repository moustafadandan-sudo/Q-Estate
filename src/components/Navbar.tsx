"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/developers", label: "Developers" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M12 2a9.9 9.9 0 0 0-8.6 14.8L2 22l5.4-1.4A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.2.8.9-3.1-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1l-.7.9c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-2-1.2 7.1 7.1 0 0 1-1.4-1.8c-.1-.2 0-.4.1-.5l.5-.6c.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4l-.7-1.7c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.5 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.7.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .2-1.1-.1-.2-.2-.2-.4-.3Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.6 3.5 9 3a1.5 1.5 0 0 1 1.7.9l1.1 2.6a1.5 1.5 0 0 1-.4 1.7l-1.5 1.3a15.2 15.2 0 0 0 4.6 4.6l1.3-1.5a1.5 1.5 0 0 1 1.7-.4l2.6 1.1A1.5 1.5 0 0 1 21 15v2.4a2 2 0 0 1-2 2A16.4 16.4 0 0 1 4.6 5.5a2 2 0 0 1 2-2Z"
      />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-slate-200 bg-white/95 shadow-lg backdrop-blur-xl"
            : "border-slate-200 bg-white/90 shadow-sm backdrop-blur-md"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 lg:px-8 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/images/projects/logo/q-estate-logo.png"
              alt="Q Estate"
              width={320}
              height={100}
              className={`h-auto transition-all duration-300 ${
                scrolled ? "w-44 lg:w-52" : "w-52 lg:w-64"
              }`}
              priority
            />
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {links.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 text-sm font-semibold transition-colors duration-200 ${
                    active
                      ? "text-cyan-600"
                      : "text-slate-700 hover:text-cyan-600"
                  }`}
                >
                  {link.label}

                  <span
                    className={`absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-cyan-500 transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://wa.me/97400000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-500 px-4 py-2.5 text-sm font-semibold text-cyan-600 transition duration-200 hover:bg-cyan-50"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>

            <a
              href="tel:+97400000000"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition duration-200 hover:bg-cyan-600 hover:shadow-lg"
            >
              <PhoneIcon />
              Call Us
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500 text-white shadow-md transition hover:bg-cyan-600 lg:hidden"
            aria-label="Open navigation menu"
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-[85%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-slate-200 px-6">
          <Image
            src="/images/projects/logo/q-estate-logo.png"
            alt="Q Estate"
            width={260}
            height={80}
            className="h-auto w-44"
          />

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-800 transition hover:bg-slate-200"
            aria-label="Close navigation menu"
          >
            <CloseIcon />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-2 overflow-y-auto px-6 py-8">
          {links.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-4 py-3.5 text-lg font-semibold transition ${
                  active
                    ? "bg-cyan-50 text-cyan-600"
                    : "text-slate-800 hover:bg-slate-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="space-y-3 border-t border-slate-200 p-6">
          <a
            href="https://wa.me/97400000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-500 px-5 py-3.5 font-semibold text-cyan-600 transition hover:bg-cyan-50"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>

          <a
            href="tel:+97400000000"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3.5 font-semibold text-white transition hover:bg-cyan-600"
          >
            <PhoneIcon />
            Call Us
          </a>
        </div>
      </aside>
    </>
  );
}