import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-textPrimary">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <Hero />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}