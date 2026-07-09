import { BookOpen, Package, FileText, Building2, ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';

const products = [
  { icon: BookOpen, title: 'Eco-Stationery', description: 'Notebook covers, folders, and bookmarks made from fused LDPE sheets — durable, water-resistant, and fully recycled.', tag: 'Consumer' },
  { icon: Package, title: 'Sustainable Packaging', description: 'Protective packaging sheets and dividers that replace single-use cardboard and bubble wrap with a reusable, waterproof alternative.', tag: 'B2B' },
  { icon: FileText, title: 'Print & Display Sheets', description: 'Rigid, printable composite sheets for signage, menus, and displays — weatherproof and long-lasting.', tag: 'Commercial' },
  { icon: Building2, title: 'Construction Boards', description: 'Insulating boards and panels for lightweight construction applications — turning plastic waste into building material.', tag: 'Industrial' },
];

export function Products() {
  return (
    <section id="products" className="relative py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/50 section-padding overflow-hidden">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-secondary-300/15 dark:bg-secondary-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
              Our Products
            </span>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white text-balance">
              From Waste to <span className="gradient-text">Worth</span>
            </h2>
            <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-balance">
              Our composite sheets can be shaped into a wide range of practical products —
              each one keeping plastic out of landfills and oceans.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {products.map((product, i) => (
            <Reveal key={product.title} delay={i * 100}>
              <div className="glass-card p-7 group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform duration-300">
                    <product.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
                    {product.tag}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  {product.title}
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-primary-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{product.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
