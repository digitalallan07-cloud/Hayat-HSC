import Header from './sections/Header';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import Products from './sections/Products';
import Stats from './sections/Stats';
import Testimonials from './sections/Testimonials';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Products />
        <Stats />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
