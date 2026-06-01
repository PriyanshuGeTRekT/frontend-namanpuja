import { Globe2, MapPin, HandHeart, CalendarCheck } from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem } from './motion';

const steps = [
  { icon: Globe2, title: 'Choose your country', desc: 'Select where you need the puja performed — in India or abroad.' },
  { icon: MapPin, title: 'Choose your city', desc: 'Pick your city to see all pujas available near you.' },
  { icon: HandHeart, title: 'Select your puja', desc: 'Choose a home-visit puja or an online e-puja with full guidance.' },
  { icon: CalendarCheck, title: 'Book & relax', desc: 'Pick a date and our experienced priests handle the rest.' },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="container-page py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="badge">Simple & sacred</span>
        <h2 className="section-title mt-4">How it works</h2>
        <p className="mt-3 text-ink/60">
          From choosing your city to receiving divine blessings — booking a puja takes just a few steps.
        </p>
      </Reveal>

      <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <StaggerItem key={s.title}>
            <div className="card h-full">
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-saffron-50 text-saffron-600">
                  <s.icon className="h-6 w-6" />
                </span>
                <span className="font-display text-3xl font-extrabold text-saffron-100">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{s.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
