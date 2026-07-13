import { Leaf, Mail, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-slate-900 dark:bg-black section-padding pt-16 pb-8 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg shadow-primary-500/30">
                <Leaf className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display font-extrabold text-lg text-white">
                Eco<span className="gradient-text">Fuse</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Fusing waste into a sustainable future. A student-led startup transforming
              discarded LDPE plastic bags into durable composite sheets.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About', href: '#about' },
                { label: 'Technology', href: '#technology' },
                { label: 'Products', href: '#products' },
                { label: 'Impact', href: '#impact' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate-400 hover:text-primary-400 transition-colors text-sm">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Connect</h4>
            <a href="mailto:Ecofuse.work@gmail.com" className="inline-flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors text-sm">
              <Mail className="w-4 h-4" />
              Ecofuse.work@gmail.com
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} EcoFuse. All rights reserved.</p>
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Made with <Heart className="w-4 h-4 text-primary-500 fill-primary-500" /> for a greener planet
          </p>
        </div>
      </div>
    </footer>
  );
}
