import { Suspense, lazy, useCallback, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';

// Below-the-fold sections load after the hero.
const About = lazy(() => import('./components/About').then((m) => ({ default: m.About })));
const Projects = lazy(() => import('./components/Projects').then((m) => ({ default: m.Projects })));
const Skills = lazy(() => import('./components/Skills').then((m) => ({ default: m.Skills })));
const Experience = lazy(() => import('./components/Experience').then((m) => ({ default: m.Experience })));
const Education = lazy(() => import('./components/Education').then((m) => ({ default: m.Education })));
const Certifications = lazy(() =>
  import('./components/Certifications').then((m) => ({ default: m.Certifications }))
);
const Contact = lazy(() => import('./components/Contact').then((m) => ({ default: m.Contact })));
const Footer = lazy(() => import('./components/Footer').then((m) => ({ default: m.Footer })));

function App() {
  // Picking a tool in Stack filters the Work section.
  const [techFilter, setTechFilter] = useState<string | null>(null);

  const pickTech = useCallback((tech: string) => {
    setTechFilter((current) => (current?.toLowerCase() === tech.toLowerCase() ? null : tech));
    document.getElementById('projects')?.scrollIntoView();
  }, []);

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <Navigation />
      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-screen" />}>
          <About />
          <Projects techFilter={techFilter} onClearTech={() => setTechFilter(null)} />
          <Skills activeTech={techFilter} onPickTech={pickTech} />
          <Experience />
          <Education />
          <Certifications />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
