import Link from 'next/link';
import { Flame, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const year = 2026;
  return (
    <footer className="mt-24 border-t border-saffron-100 bg-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-saffron-gradient text-white">
              <Flame className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-bold">
              Naman<span className="text-saffron-600">Puja</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink/60">
            Authentic Vedic pujas performed by experienced priests — at your home or online.
            Preserving Hindu traditions across generations.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-ink/60">
            <li><Link href="/#pujas" className="hover:text-saffron-600">Home Visit Puja</Link></li>
            <li><Link href="/#pujas" className="hover:text-saffron-600">Online e-Puja</Link></li>
            <li><Link href="/#pujas" className="hover:text-saffron-600">Griha Pravesh</Link></li>
            <li><Link href="/#temples" className="hover:text-saffron-600">Temples</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-ink/60">
            <li><Link href="/#how-it-works" className="hover:text-saffron-600">How it works</Link></li>
            <li><Link href="/book" className="hover:text-saffron-600">Book a Puja</Link></li>
            <li><Link href="/#cities" className="hover:text-saffron-600">Cities we serve</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-ink/60">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-saffron-500" /> hello@namanpuja.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-saffron-500" /> +91 00000 00000</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-saffron-500" /> Serving India & abroad</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-saffron-100">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-ink/50 sm:flex-row">
          <p>© {year} Naman Puja. All rights reserved.</p>
          <p>Honor Tradition · Celebrate Family · Receive Divine Blessings</p>
        </div>
      </div>
    </footer>
  );
}
