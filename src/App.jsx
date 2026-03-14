import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Suspense, lazy } from 'react';
import IntroGate from './pages/IntroGate';
import Home from './pages/Home';
import Life from './pages/Life';
// Lazy-load the potentially heavy Miracles page to split the main bundle
const Miracles = lazy(() => import('./pages/Miracles'));
const DivinaMisericordia = lazy(() => import('./pages/DivinaMisericordia'));
const SacroCuore = lazy(() => import('./pages/SacroCuore'));
const SanMichele = lazy(() => import('./pages/SanMichele'));
const Rosario = lazy(() => import('./pages/Rosario'));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div aria-busy="true" aria-label="Loading" className="p-8 text-center">Loading…</div>}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<IntroGate />} />
          <Route path="/home" element={<Home />} />
          <Route path="/life" element={<Life />} />
          <Route path="/miracles" element={<Miracles />} />
          <Route path="/divina-misericordia" element={<DivinaMisericordia />} />
          <Route path="/sacro-cuore" element={<SacroCuore />} />
          <Route path="/san-michele" element={<SanMichele />} />
          <Route path="/rosario" element={<Rosario />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <>
      {/* Skip link for screen readers and keyboard users */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-white/90 p-2 rounded">Skip to content</a>
      <AnimatedRoutes />
    </>
  );
}
