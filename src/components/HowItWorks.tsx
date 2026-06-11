import {
  MapPin,
  ScrollText,
  UserRound,
  CreditCard,
  Sparkles,
  Gift,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "./motion";
import { section } from "framer-motion/m";

const steps = [
  {
    icon: MapPin,
    title: "Select Your City",
    description:
      "Choose the city where you want the puja to be performed and explore available temples and priests.",
  },
  {
    icon: ScrollText,
    title: "Choose a Puja",
    description:
      "Browse various rituals and select the puja that best matches your spiritual needs and occasion.",
  },
  {
    icon: UserRound,
    title: "Enter Devotee Details",
    description:
      "Provide names, gotra and prayer intentions so the priest can perform the sankalp correctly.",
  },
  {
    icon: CreditCard,
    title: "Complete Payment",
    description:
      "Securely confirm your booking through our simple and trusted payment process.",
  },
  {
    icon: Sparkles,
    title: "Puja Is Performed",
    description:
      "The priest performs the ritual at the scheduled date and time following authentic Vedic traditions.",
  },
  {
    icon: Gift,
    title: "Receive Updates",
    description:
      "Get booking updates, puja completion details and blessings directly through the platform.",
  },
];
       

export function HowItWorks() {

  
  return (
    <section id="how-it-works" className="container-page py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="badge">Simple Process</span>

        <h2 className="section-title mt-4">How It Works</h2>

        <p className="mt-3 text-ink/60">
          Book a sacred puja in just a few simple steps.
        </p>
      </Reveal>

      <div className="mt-20 space-y-12">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              className={`grid items-center gap-8 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
          >
            {/* Step Number */}
            <div className="flex justify-center">
              <div className="flex h-32 w-32 items-center justify-center rounded-3xl border border-saffron-200 bg-saffron-50 shadow-sm">
                <Icon className="h-12 w-12 text-saffron-600" />
              </div>
            </div>
            {/* Content */}
            <div
              className={`pl-8 ${
                index % 2 === 0
                  ? "border-l-4 border-saffron-300"
                  : "border-r-4 border-saffron-300 pr-8 lg:text-right"
              }`}
            >
              <span className="text-sm font-semibold uppercase tracking-wider text-saffron-600">
                Step {index + 1}
              </span>

              <h3 className="mt-2 font-display text-2xl font-bold">
                {step.title}
              </h3>

              <p className="mt-3 leading-relaxed text-ink/70">
                {step.description}
              </p>
            </div>
          </div>
        )})}
      </div>
    </section>
  );
}
