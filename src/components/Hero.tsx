import { ArrowRight, Recycle, Sparkles, Leaf } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-grid dark:bg-grid-dark" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300/30 dark:bg-primary-600/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-accent-300/30 dark:bg-accent-600/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-secondary-300/20 dark:bg-secondary-600/15 rounded-full blur-3xl animate-blob" style={{ animationDelay: '6s' }} />

      <div className="relative z-10 section-padding mx-auto max-w-5xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in-down">
          <Sparkles className="w-4 h-4 text-primary-500" />
          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
            Student-Led Sustainability Startup
          </span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-7xl tracking-tight text-slate-900 dark:text-white text-balance leading-[1.1] animate-fade-in-up">
          Fusing Waste into a{' '}
          <span className="gradient-text">Sustainable Future</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed text-balance animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          We transform discarded LDPE plastic bags into durable, paper-like composite sheets
          through a simple heat-fusion process — turning pollution into possibility.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a href="#technology" className="btn-primary group">
            Explore the Technology
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="btn-secondary">
            Partner With Us
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
          {[
            { icon: Recycle, value: '100%', label: 'Recycled Input' },
            { icon: Leaf, value: 'Zero', label: 'Chemical Additives' },
            { icon: Sparkles, value: 'LDPE', label: 'Plastic Transformed' },
          ].map((stat) => (
            <div key={stat.label} className="glass-card p-4 sm:p-6 text-center">
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary-500" />
              <div className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
