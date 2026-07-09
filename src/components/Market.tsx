import { TrendingUp, Globe, Users, Building } from 'lucide-react';
import { Reveal } from './Reveal';

const stats = [
  { icon: Globe, value: '5 Trillion', label: 'Plastic bags used globally per year' },
  { icon: TrendingUp, value: '<9%', label: 'Of all plastic ever produced has been recycled' },
  { icon: Building, value: '$40B+', label: 'Global sustainable packaging market by 2027' },
  { icon: Users, value: '66%', label: 'Of consumers prefer eco-friendly brands' },
];

export function Market() {
  return (
    <section id="market" className="relative py-24 lg:py-32 section-padding overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-300/15 dark:bg-accent-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
              Market Opportunity
            </span>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white text-balance">
              A Problem Worth <span className="gradient-text">Solving</span>
            </h2>
            <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-balance">
              The world is waking up to plastic pollution. The demand for sustainable
              alternatives is growing faster than ever — and EcoFuse is positioned to meet it.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div className="glass-card p-7 text-center group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="font-display font-extrabold text-3xl sm:text-4xl gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
