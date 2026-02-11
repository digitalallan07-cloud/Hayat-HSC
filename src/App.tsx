import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import VisionMission from './sections/VisionMission';
import Products from './sections/Products';
import Services from './sections/Services';
import Stats from './sections/Stats';
import Gallery from './sections/Gallery';
import Testimonials from './sections/Testimonials';
import Clients from './sections/Clients';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Products />
        <Services />
        <Stats />
        <Gallery />
        <Testimonials />
        <Clients />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
