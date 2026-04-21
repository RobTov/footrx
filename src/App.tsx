import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './presentation/components/Navbar/Navbar';
import Footer from './presentation/components/Footer/Footer';
import Home from './presentation/pages/Home/Home';
import WhyChooseUs from './presentation/pages/WhyChooseUs/WhyChooseUs';
import Services from './presentation/pages/Services/Services';
import Providers from './presentation/pages/Providers/Providers';
import Schedule from './presentation/pages/Schedule/Schedule';
import FAQ from './presentation/pages/FAQ/FAQ';
import ServicesExplained from './presentation/pages/ServicesExplained/ServicesExplained';
import FreeEvaluation from './presentation/pages/FreeEvaluation/FreeEvaluation';
import Contact from './presentation/pages/Contact/Contact';
import './presentation/styles/global.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/providers" element={<Providers />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/services-explained" element={<ServicesExplained />} />
        <Route path="/free-evaluation" element={<FreeEvaluation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;