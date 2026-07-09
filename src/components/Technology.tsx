import { Scissors, Flame, Layers, CheckCircle } from 'lucide-react';
import { Reveal } from './Reveal';

const steps = [
  { icon: Scissors, step: '01', title: 'Collect & Shred', description: 'Discarded LDPE plastic bags are collected, cleaned, and shredded into uniform flakes — ready for transformation.' },
  { icon: Flame, step: '02', title: 'Heat Fusion', description: 'The flakes are layered and pressed under controlled low heat. The LDPE softens and fuses together — no chemicals, no solvents, just heat.' },
  { icon: Layers, step: '03', title: 'Press & Form', description: 'Fused layers are pressed into thin, durable sheets with a paper-like texture. The result is a strong, flexible composite material.' },
  { icon: CheckCircle, step: '04', title: 'Ready to Use', description: 'The finished sheets are cut, shaped, and transformed into products — from stationery to packaging to construction materials.' },
];

export function Technology() {
  return (
    <section id="technology" className="relative py-24 lg:py-32 section-padding overflow-hidden">
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary-300/15 dark:bg-primary-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-300/15 dark:bg-accent-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
              Our Technology
            </span>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white text-balance">
              Simple Heat. <span className="gradient-text">Profound Impact.</span>
            </h2>
            <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-balance">
              Our process is deliberately simple — no industrial chemicals, no complex
              machinery. Just four steps that anyone can replicate.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <Reveal key={step.step} delay={i * 100}>
              <div className="relative group">
                <div className="glass-card p-7 h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="font-display font-extrabold text-4xl text-slate-200 dark:text-slate-700 group-hover:text-primary-200 dark:group-hover:text-primary-800 transition-colors duration-300">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">{step.description}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary-400 to-transparent z-10" />
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 glass-card p-8 lg:p-10 text-center">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mb-4">
              Why Our Process Works
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 mt-6">
              {[
                { label: 'No Chemicals', desc: 'Pure heat fusion — zero additives or solvents' },
                { label: 'Low Energy', desc: 'Operates at temperatures well below industrial recycling' },
                { label: 'Scalable', desc: 'Replicable with basic equipment anywhere in the world' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="inline-flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-primary-500" />
                    <span className="font-semibold text-slate-900 dark:text-white">{item.label}</span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
