import { Trash2, Clock, AlertTriangle, Ban } from 'lucide-react';
import { Reveal } from './Reveal';

const problems = [
  {
    icon: Trash2,
    title: 'Billions of Bags Wasted',
    description: 'An estimated 5 trillion plastic bags are used globally each year — the vast majority end up in landfills or the environment after a single use.',
  },
  {
    icon: Ban,
    title: 'Nearly Impossible to Recycle',
    description: 'LDPE bags jam and wrap around conventional recycling machinery, making them too costly and difficult for most facilities to process.',
  },
  {
    icon: Clock,
    title: 'Centuries to Decompose',
    description: 'A single plastic bag can take 500–1,000 years to break down, leaching microplastics into soil and water along the way.',
  },
  {
    icon: AlertTriangle,
    title: 'Microplastic Pollution',
    description: 'As bags fragment, they release microplastics that enter food chains, water supplies, and ultimately — human bodies.',
  },
];

export function Problem() {
  return (
    <section id="problem" className="relative py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/50 section-padding overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-error-300/10 dark:bg-error-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-error-500 dark:text-error-400">
              The Problem
            </span>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white text-balance">
              Plastic Bags Are <span className="text-error-500 dark:text-error-400">Drowning</span> Our Planet
            </h2>
            <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-balance">
              LDPE plastic bags are one of the most pervasive and least addressed forms of
              pollution on Earth. Here's why they're so hard to deal with.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="glass-card p-7 group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-error-50 dark:bg-error-900/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <p.icon className="w-7 h-7 text-error-500 dark:text-error-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2">{p.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{p.description}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
