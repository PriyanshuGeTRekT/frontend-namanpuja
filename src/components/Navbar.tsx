'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Flame } from 'lucide-react';

const links = [
  { href: '/#pujas', label: 'Pujas' },
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/#cities', label: 'Cities' },
  { href: '/#temples', label: 'Temples' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-saffron-100 bg-cream/80 backdrop-blur-md">
      <nav className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-saffron-gradient text-white shadow-soft">
            <Flame className="h-5 w-5 diya-glow" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight">
            Naman<span className="text-saffron-600">Puja</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-saffron-600"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/book" className="btn-primary px-5 py-2 text-sm">
            Book a Puja
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-saffron-100 bg-cream md:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink/80 hover:bg-saffron-50"
              >
                {l.label}
              </Link>
            ))}
            <Link href="/book" onClick={() => setOpen(false)} className="btn-primary mt-2 text-sm">
              Book a Puja
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
