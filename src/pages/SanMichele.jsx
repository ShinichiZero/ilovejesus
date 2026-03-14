import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

export default function SanMichele() {
  const { t } = useTranslation();
  const [longPrayerOpen, setLongPrayerOpen] = useState(false);

  const paragraphs = t('sanMichele.longPrayer.paragraphs', { returnObjects: true });

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-[#FDFAF5] flex flex-col"
    >
      <Navbar />

      <main id="main-content" className="flex-1 max-w-3xl mx-auto px-6 pt-28 pb-16 w-full">

        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-12"
        >
          <span className="text-4xl select-none">⚔️</span>
          <h1 className="font-serif text-3xl md:text-4xl text-gray-800 mt-4 mb-2">
            {t('sanMichele.title')}
          </h1>
          <p className="font-serif text-[#E3C28E] text-sm tracking-widest uppercase">
            {t('sanMichele.subtitle')}
          </p>
          <div className="w-24 h-px bg-[#E3C28E]/40 mx-auto mt-6" />
        </motion.div>

        {/* Section: History */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-10"
          aria-labelledby="history-heading"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#E3C28E] text-lg select-none">✦</span>
            <h2 id="history-heading" className="font-serif text-xl text-gray-800">
              {t('sanMichele.history.title')}
            </h2>
          </div>
          <div className="border-l-2 border-[#E3C28E]/30 pl-6 space-y-3">
            <p className="font-serif text-gray-600 leading-relaxed text-sm md:text-base">
              {t('sanMichele.history.text1')}
            </p>
            <p className="font-serif text-gray-600 leading-relaxed text-sm md:text-base">
              {t('sanMichele.history.text2')}
            </p>
          </div>
        </motion.section>

        {/* Section: Short Prayer */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-10 bg-white border border-[#E3C28E]/30 rounded-lg p-8 shadow-sm"
          aria-labelledby="short-prayer-heading"
        >
          <div className="text-center mb-5">
            <span className="text-[#E3C28E] text-2xl select-none">⚔️</span>
            <h2 id="short-prayer-heading" className="font-serif text-xl text-gray-800 mt-3 mb-1">
              {t('sanMichele.shortPrayer.title')}
            </h2>
            <p className="font-serif text-gray-400 text-xs italic">
              {t('sanMichele.shortPrayer.label')}
            </p>
          </div>
          <div className="border-l-2 border-[#E3C28E]/40 pl-5">
            <p className="font-serif text-gray-700 leading-relaxed text-sm md:text-base italic">
              {t('sanMichele.shortPrayer.text')}
            </p>
          </div>
        </motion.section>

        {/* Section: Full Prayer of Pope Leo XIII */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-12"
          aria-labelledby="long-prayer-heading"
        >
          <div className="border border-[#E3C28E]/25 rounded-lg overflow-hidden">
            <button
              onClick={() => setLongPrayerOpen(!longPrayerOpen)}
              className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-[#E3C28E]/5 transition-colors duration-200 text-left"
              aria-expanded={longPrayerOpen}
              aria-controls="long-prayer-content"
            >
              <div>
                <h2 id="long-prayer-heading" className="font-serif text-lg text-gray-800 font-medium">
                  {t('sanMichele.longPrayer.title')}
                </h2>
                <p className="font-serif text-gray-400 text-xs italic mt-0.5">
                  {t('sanMichele.longPrayer.label')}
                </p>
              </div>
              <span
                className="text-[#E3C28E] text-sm ml-4 flex-shrink-0 transition-transform duration-300"
                style={{ transform: longPrayerOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
              >
                ▶
              </span>
            </button>

            <AnimatePresence initial={false}>
              {longPrayerOpen && (
                <motion.div
                  id="long-prayer-content"
                  key="long-prayer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-5 bg-[#FDFAF5] border-t border-[#E3C28E]/15 space-y-4">
                    {Array.isArray(paragraphs) && paragraphs.map((para, i) => (
                      <p key={i} className="font-serif text-gray-700 leading-relaxed text-sm md:text-base italic">
                        {para}
                      </p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.section>

        {/* Navigation buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/home"
            className="px-8 py-3 border border-[#E3C28E] text-[#E3C28E] font-serif text-sm tracking-[0.2em] uppercase hover:bg-[#E3C28E]/10 transition-all duration-300 rounded-sm text-center"
          >
            {t('sanMichele.backHome')}
          </Link>
          <Link
            to="/rosario"
            className="px-8 py-3 bg-[#E3C28E]/10 border border-[#E3C28E] text-[#E3C28E] font-serif text-sm tracking-[0.2em] uppercase hover:bg-[#E3C28E]/20 transition-all duration-300 rounded-sm text-center"
          >
            {t('sanMichele.toRosario')}
          </Link>
        </motion.div>
      </main>

      <Footer />
    </motion.div>
  );
}
