import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
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

const fadeAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {Object.entries(pageComponents).map(([path, Component]) => (
          <Route key={path} path={path} element={
            <motion.div {...fadeAnimation}>
              <Component />
            </motion.div>
          } />
        ))}
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