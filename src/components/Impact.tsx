import { Leaf, Recycle, Droplets, Factory } from 'lucide-react';
import { Reveal } from './Reveal';

const impacts = [
  { icon: Recycle, value: '1 ton', label: 'LDPE waste diverted per production cycle' },
  { icon: Leaf, value: '2.7t CO₂', label: 'Emissions avoided per ton of plastic recycled' },
  { icon: Droplets, value: '0', label: 'Chemicals or solvents used in our process' },
  { icon: Factory, value: 'Low', label: 'Energy footprint compared to conventional recycling' },
];

export function Impact() {
  return (
    <section id="impact" className="relative py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/50 section-padding overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary-300/15 dark:bg-primary-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
              Our Impact
            </span>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white text-balance">
              Every Sheet Tells a <span className="gradient-text">Story</span>
            </h2>
            <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-balance">
              We measure success not just in products made, but in waste diverted, emissions
              avoided, and minds changed.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact, i) => (
            <Reveal key={impact.label} delay={i * 100}>
              <div className="glass-card p-7 text-center group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform duration-300">
                  <impact.icon className="w-8 h-8 text-white" />
                </div>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-2">{impact.value}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{impact.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 glass-card p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-4">
                  Aligned with the UN Sustainable Development Goals
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  EcoFuse directly contributes to multiple UN SDGs — from responsible
                  consumption and production to climate action and life below water. We're
                  not just building a business; we're building a movement.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { num: '12', label: 'Responsible Consumption' },
                  { num: '14', label: 'Life Below Water' },
                  { num: '13', label: 'Climate Action' },
                ].map((sdg) => (
                  <div key={sdg.num} className="text-center p-4 rounded-2xl bg-primary-50 dark:bg-primary-900/20">
                    <div className="font-display font-extrabold text-3xl gradient-text mb-1">{sdg.num}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 leading-tight">{sdg.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
