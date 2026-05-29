import { Header, Footer } from './components/layout';
import {
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Education,
  Contact,
} from './components/sections';

function App() {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
