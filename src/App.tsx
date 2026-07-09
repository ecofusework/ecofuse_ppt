import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Problem } from './components/Problem';
import { Technology } from './components/Technology';
import { Products } from './components/Products';
import { Market } from './components/Market';
import { Impact } from './components/Impact';
import { Roadmap } from './components/Roadmap';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Problem />
        <Technology />
        <Products />
        <Market />
        <Impact />
        <Roadmap />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
