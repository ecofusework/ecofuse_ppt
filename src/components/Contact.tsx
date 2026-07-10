import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, Loader2, User, MessageSquare } from 'lucide-react';
import { Reveal } from './Reveal';
import { QRCodeDisplay } from './QRCodeDisplay';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xpqgegvj', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        const data = await response.json().catch(() => ({}));
        setErrorMsg(data?.errors?.[0]?.message || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 section-padding overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary-300/15 dark:bg-primary-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-300/15 dark:bg-accent-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
              Get in Touch
            </span>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white text-balance">
              Let's Build a <span className="gradient-text">Greener Future</span> Together
            </h2>
            <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-balance">
              Whether you want to partner, invest, collaborate, or just learn more — we'd
              love to hear from you.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-8">
          <Reveal className="lg:col-span-2 min-w-0">
            <div className="space-y-6">
              <div className="glass-card p-7">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">Email Us</div>
                    <a href="mailto:Ecofuse.work@gmail.com" className="font-semibold text-slate-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      Ecofuse.work@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-card p-7">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">Based In</div>
                    <div className="font-semibold text-slate-900 dark:text-white">Student-Led, Globally Minded</div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-7 bg-gradient-to-br from-primary-500 to-secondary-500 border-0">
                <h3 className="font-display font-bold text-lg text-white mb-2">Join the Movement</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Every message is a step toward a world without plastic waste. Reach out —
                  let's make it happen.
                </p>
              </div>

              <QRCodeDisplay />
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-3 min-w-0">
            <div className="min-w-0">
              <div className="glass-card p-7 lg:p-10">
                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-success-100 dark:bg-success-900/30 flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-success-600 dark:text-success-400" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-6">Thank you for reaching out. We'll get back to you soon.</p>
                    <button onClick={() => setStatus('idle')} className="btn-secondary">Send Another Message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input type="text" name="name" required placeholder="Your name" className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input type="email" name="email" required placeholder="you@example.com" className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                      <input type="text" name="subject" required placeholder="What's this about?" className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                        <textarea name="message" required rows={5} placeholder="Tell us how you'd like to collaborate..." className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none" />
                      </div>
                    </div>

                    {status === 'error' && (
                      <div className="px-4 py-3 rounded-xl bg-error-50 dark:bg-error-900/20 border border-error-200 dark:border-error-800 text-error-700 dark:text-error-400 text-sm">
                        {errorMsg}
                      </div>
                    )}

                    <button type="submit" disabled={status === 'loading'} className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed">
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
