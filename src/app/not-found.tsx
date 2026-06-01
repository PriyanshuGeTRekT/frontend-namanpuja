import Link from 'next/link';
import { Flame } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center text-center">
      <span className="grid h-16 w-16 place-items-center rounded-full bg-saffron-gradient text-white shadow-glow">
        <Flame className="h-8 w-8 diya-glow" />
      </span>
      <h1 className="mt-6 font-display text-5xl font-extrabold">404</h1>
      <p className="mt-3 max-w-md text-ink/60">
        The page you are looking for could not be found. It may have moved, or the link may be incorrect.
      </p>
      <Link href="/" className="btn-primary mt-8">Return Home</Link>
    </section>
  );
}
