import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import IntroGate from './pages/IntroGate';
import Home from './pages/Home';
import Life from './pages/Life';
import Miracles from './pages/Miracles';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<IntroGate />} />
        <Route path="/home" element={<Home />} />
        <Route path="/life" element={<Life />} />
        <Route path="/miracles" element={<Miracles />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return <AnimatedRoutes />;
}
