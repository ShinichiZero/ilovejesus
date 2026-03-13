import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../components/LanguageSelector';
import Footer from '../components/Footer';

export default function IntroGate() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [entering, setEntering] = useState(false);

  const handleEnter = () => {
    setEntering(true);
    setTimeout(() => {
      navigate('/home');
    }, 900);
  };

  // Allow pressing Enter (keyboard) to trigger the enter action
  useEffect(() => {
    if (entering) return;
    const onKeyDown = (e) => {
      if (e.key === 'Enter') handleEnter();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [entering]);

  return (
    <AnimatePresence>
      {entering ? (
        <motion.div
          key="wash"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          className="fixed inset-0 bg-white z-50"
        />
      ) : (
        <motion.div
          key="gate"
          id="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="min-h-screen bg-white shimmer-bg flex flex-col items-center justify-center px-6 text-center"
        >
          {/* Top language selector */}
          <div className="absolute top-6 right-6">
            <LanguageSelector />
          </div>

          {/* Cross symbol */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="mb-10"
          >
            <span className="text-6xl text-[#E3C28E] opacity-70 select-none">✝</span>
          </motion.div>

          {/* Main dedication text */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="max-w-2xl font-serif text-xl md:text-2xl leading-relaxed text-gray-700 italic mb-12"
            role="region"
            aria-live="polite"
          >
            {t('intro.dedication')}
          </motion.p>

          {/* Enter button */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            onClick={handleEnter}
            aria-label={t('intro.enter')}
            className="px-10 py-3 border border-[#E3C28E] text-[#E3C28E] font-serif text-sm tracking-[0.3em] uppercase hover:bg-[#E3C28E]/10 transition-all duration-300 rounded-sm"
          >
            {t('intro.enter')}
          </motion.button>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="mt-16 w-24 h-px bg-[#E3C28E]/40"
          />

          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
