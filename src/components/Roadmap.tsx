import { Rocket, FlaskConical, TrendingUp, Globe2 } from 'lucide-react';
import { Reveal } from './Reveal';

const milestones = [
  { icon: FlaskConical, phase: 'Phase 1', title: 'Research & Prototyping', status: 'Completed', description: 'Developed and tested the heat-fusion process. Produced the first successful composite sheets from discarded LDPE bags.' },
  { icon: Rocket, phase: 'Phase 2', title: 'Product Development', status: 'In Progress', description: 'Refining sheet quality and durability. Designing our first product line — eco-stationery and packaging materials.' },
  { icon: TrendingUp, phase: 'Phase 3', title: 'Market Entry', status: 'Upcoming', description: 'Launch initial products to consumers and B2B partners. Build awareness through sustainability campaigns and partnerships.' },
  { icon: Globe2, phase: 'Phase 4', title: 'Scale & Expand', status: 'Future', description: 'Open-source the process for global replication. Partner with NGOs and municipalities to set up community-scale production.' },
];

const statusColors: Record<string, string> = {
  Completed: 'bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-400',
  'In Progress': 'bg-warning-100 dark:bg-warning-900/30 text-warning-700 dark:text-warning-400',
  Upcoming: 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-400',
  Future: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400',
};

export function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24 lg:py-32 section-padding overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-secondary-300/15 dark:bg-secondary-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
              Roadmap
            </span>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white text-balance">
              Where We've Been, <span className="gradient-text">Where We're Going</span>
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 via-accent-300 to-secondary-300 dark:from-primary-700 dark:via-accent-700 dark:to-secondary-700 -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {milestones.map((m, i) => (
              <Reveal key={m.phase} delay={i * 100}>
                <div className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
                  <div className={`lg:[direction:ltr] ${i % 2 === 1 ? 'lg:pl-12' : 'lg:pr-12 lg:text-right'}`}>
                    <div className="glass-card p-7 group hover:shadow-2xl transition-all duration-500">
                      <div className={`flex items-center gap-3 mb-4 ${i % 2 === 0 ? 'lg:justify-end' : ''}`}>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[m.status]}`}>{m.status}</span>
                        <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">{m.phase}</span>
                      </div>
                      <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? 'lg:justify-end' : ''}`}>
                        <m.icon className="w-6 h-6 text-primary-500" />
                        <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">{m.title}</h3>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{m.description}</p>
                    </div>
                  </div>
                  <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-4 border-primary-500 shadow-lg shadow-primary-500/30 z-10 items-center justify-center" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
