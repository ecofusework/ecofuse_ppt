import { Target, Eye, Heart } from 'lucide-react';
import { Reveal } from './Reveal';

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 section-padding">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
              About Us
            </span>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white text-balance">
              A Mission Born from <span className="gradient-text">Purpose</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="glass-card p-8 lg:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-2">Our Mission</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    To eliminate LDPE plastic bag waste by transforming it into a versatile,
                    eco-friendly composite material — proving that sustainability and
                    innovation can go hand in hand.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-accent-100 dark:bg-accent-900/40 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-2">Our Vision</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    A world where every plastic bag is seen not as trash, but as raw material
                    for a circular economy — where waste is simply a resource in disguise.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary-100 dark:bg-secondary-900/40 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-2">Our Values</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Simplicity, accessibility, and impact. We believe the best solutions
                    are the ones anyone can adopt — no complex machinery, no harmful
                    chemicals, just heat and purpose.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="space-y-6">
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                EcoFuse began as a student project with a simple question:{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  what if the plastic bags choking our planet could become something useful?
                </span>
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                LDPE plastic bags are among the hardest plastics to recycle — they clog
                conventional recycling machinery and take centuries to decompose. Yet they're
                used by the billions every single day.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                We developed a low-heat fusion process that layers and presses shredded LDPE
                bags into durable, paper-like composite sheets. No chemicals. No fancy
                equipment. Just a scalable, replicable method that anyone can adopt.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="glass-card p-5 text-center">
                  <div className="font-display font-extrabold text-3xl gradient-text">2025</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">Founded</div>
                </div>
                <div className="glass-card p-5 text-center">
                  <div className="font-display font-extrabold text-3xl gradient-text">Student</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">Led Team</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
