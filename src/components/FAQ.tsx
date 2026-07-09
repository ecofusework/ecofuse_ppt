import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Reveal } from './Reveal';

const faqs = [
  { question: 'What is LDPE and why is it hard to recycle?', answer: 'LDPE (Low-Density Polyethylene) is the plastic used in shopping bags, bread bags, and cling wrap. It is notoriously difficult to recycle because it is thin and flexible — it tangles and wraps around the machinery at conventional recycling facilities, causing jams and damage. As a result, most recycling centers simply reject LDPE bags.' },
  { question: 'How does the EcoFuse heat-fusion process work?', answer: 'We collect discarded LDPE bags, clean and shred them into flakes, then layer and press them under controlled low heat. The heat causes the LDPE to soften and fuse together — no chemicals, no solvents, no adhesives. The fused layers are pressed into durable, paper-like composite sheets that can be cut and shaped into products.' },
  { question: 'Are the composite sheets themselves recyclable?', answer: 'Yes. Because our sheets are made from a single type of plastic (LDPE) with no chemical additives, they can be re-shredded and re-fused back into new sheets. This makes our products part of a true circular economy — they can be recycled again and again.' },
  { question: 'Is the process safe and environmentally friendly?', answer: 'Absolutely. Our process uses only heat — no toxic chemicals, solvents, or adhesives. The operating temperatures are well below those that would cause harmful emissions. We also operate at a low energy footprint compared to conventional plastic recycling.' },
  { question: 'Can I buy EcoFuse products yet?', answer: 'We are currently in the product development phase and working toward our first market launch. Follow us on social media or join our newsletter to be the first to know when products become available.' },
  { question: 'How can I partner with or support EcoFuse?', answer: 'We welcome partnerships with schools, NGOs, municipalities, and businesses that share our vision. Whether you want to adopt our process, source our materials, or collaborate on a project, reach out through our contact form and we would love to talk.' },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/50 section-padding overflow-hidden">
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-accent-300/15 dark:bg-accent-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
              FAQ
            </span>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white text-balance">
              Questions? <span className="gradient-text">We've Got Answers.</span>
            </h2>
          </div>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className="glass-card overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-display font-semibold text-lg text-slate-900 dark:text-white">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-primary-500 flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`grid transition-all duration-300 ${open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-slate-600 dark:text-slate-300 leading-relaxed">{faq.answer}</p>
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
