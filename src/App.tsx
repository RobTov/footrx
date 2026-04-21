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

const pageComponents: Record<string, React.ComponentType> = {
  '/': Home,
  '/why-choose-us': WhyChooseUs,
  '/services': Services,
  '/providers': Providers,
  '/schedule': Schedule,
  '/faq': FAQ,
  '/services-explained': ServicesExplained,
  '/free-evaluation': FreeEvaluation,
  '/contact': Contact,
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Routes location={location}>
      {Object.entries(pageComponents).map(([path, Component]) => (
        <Route key={path} path={path} element={
          <AnimatePresence mode="wait">
            <Component />
          </AnimatePresence>
        } />
      ))}
    </Routes>
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