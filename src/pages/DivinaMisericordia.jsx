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

export default function DivinaMisericordia() {
  const { t } = useTranslation();
  const [openPrayerIdx, setOpenPrayerIdx] = useState(null);

  const chapletSteps = t('divinaMisericordia.chaplet.steps', { returnObjects: true });
  const promises = t('divinaMisericordia.promises', { returnObjects: true });
  const fullPrayers = t('divinaMisericordia.chapletFullPrayers.list', { returnObjects: true });
  const jpiiParagraphs = t('divinaMisericordia.jpiiPrayer.paragraphs', { returnObjects: true });

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
          <span className="text-4xl select-none">🕊</span>
          <h1 className="font-serif text-3xl md:text-4xl text-gray-800 mt-4 mb-2">
            {t('divinaMisericordia.title')}
          </h1>
          <p className="font-serif text-[#E3C28E] text-sm tracking-widest uppercase">
            {t('divinaMisericordia.subtitle')}
          </p>
          <div className="w-24 h-px bg-[#E3C28E]/40 mx-auto mt-6" />
        </motion.div>

        {/* Central Promise */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white border border-[#E3C28E]/30 rounded-lg p-8 mb-10 text-center shadow-sm"
        >
          <span className="text-[#E3C28E] text-2xl select-none mb-4 block">✦</span>
          <blockquote className="font-serif text-gray-700 italic text-base md:text-lg leading-relaxed">
            {t('divinaMisericordia.promise')}
          </blockquote>
          <p className="mt-4 text-xs text-[#E3C28E] tracking-widest uppercase font-medium">
            {t('divinaMisericordia.promiseSource')}
          </p>
        </motion.div>

        {/* Image placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center mb-10"
        >
          <div className="w-48 h-64 border-2 border-dashed border-[#E3C28E]/50 rounded-lg flex flex-col items-center justify-center bg-white/60 text-center px-4">
            <span className="text-4xl text-[#E3C28E]/60 select-none mb-3">✝</span>
            <p className="font-serif text-[#E3C28E]/70 text-xs italic leading-snug">
              {t('divinaMisericordia.imageCaption')}
            </p>
          </div>
          <p className="mt-3 font-serif text-[#E3C28E] text-sm italic tracking-wide">
            {t('divinaMisericordia.imageMotto')}
          </p>
        </motion.div>

        {/* Section: History of St. Faustina */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mb-10"
          aria-labelledby="faustina-heading"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#E3C28E] text-lg select-none">✦</span>
            <h2 id="faustina-heading" className="font-serif text-xl text-gray-800">
              {t('divinaMisericordia.faustina.title')}
            </h2>
          </div>
          <div className="border-l-2 border-[#E3C28E]/30 pl-6 space-y-3">
            <p className="font-serif text-gray-600 leading-relaxed text-sm md:text-base">
              {t('divinaMisericordia.faustina.text1')}
            </p>
            <p className="font-serif text-gray-600 leading-relaxed text-sm md:text-base">
              {t('divinaMisericordia.faustina.text2')}
            </p>
            <p className="font-serif text-gray-600 leading-relaxed text-sm md:text-base">
              {t('divinaMisericordia.faustina.text3')}
            </p>
          </div>
        </motion.section>

        {/* Section: Hour of Mercy */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-10 bg-[#E3C28E]/5 border border-[#E3C28E]/20 rounded-lg p-6"
          aria-labelledby="mercy-hour-heading"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#E3C28E] text-2xl select-none">🕒</span>
            <h2 id="mercy-hour-heading" className="font-serif text-xl text-gray-800">
              {t('divinaMisericordia.hourOfMercy.title')}
            </h2>
          </div>
          <p className="font-serif text-gray-700 leading-relaxed text-sm md:text-base mb-3">
            {t('divinaMisericordia.hourOfMercy.text1')}
          </p>
          <p className="font-serif text-gray-700 leading-relaxed text-sm md:text-base">
            {t('divinaMisericordia.hourOfMercy.text2')}
          </p>
          <div className="mt-4 text-center">
            <span className="inline-block px-6 py-2 border border-[#E3C28E]/50 text-[#E3C28E] font-serif text-sm tracking-widest rounded-sm">
              15:00
            </span>
          </div>
        </motion.section>

        {/* Section: Chaplet of Divine Mercy */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mb-10"
          aria-labelledby="chaplet-heading"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[#E3C28E] text-lg select-none">📿</span>
            <h2 id="chaplet-heading" className="font-serif text-xl text-gray-800">
              {t('divinaMisericordia.chaplet.title')}
            </h2>
          </div>
          <p className="font-serif text-gray-500 text-sm italic mb-5 pl-8">
            {t('divinaMisericordia.chaplet.intro')}
          </p>

          <div className="space-y-4">
            {Array.isArray(chapletSteps) && chapletSteps.map((step, i) => (
              <div
                key={i}
                className="flex gap-4 bg-white border border-[#E3C28E]/20 rounded-lg p-4 hover:border-[#E3C28E]/50 transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-7 h-7 rounded-full border border-[#E3C28E]/50 flex items-center justify-center text-[#E3C28E] text-xs font-serif font-bold">
                  {i + 1}
                </div>
                <div>
                  <p className="font-serif text-gray-700 text-sm md:text-base font-semibold mb-1">
                    {step.label}
                  </p>
                  <p className="font-serif text-gray-600 text-sm leading-relaxed italic">
                    {step.prayer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Section: Promises */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-10"
          aria-labelledby="promises-heading"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#E3C28E] text-lg select-none">✦</span>
            <h2 id="promises-heading" className="font-serif text-xl text-gray-800">
              {t('divinaMisericordia.promisesTitle')}
            </h2>
          </div>
          <div className="space-y-2">
            {Array.isArray(promises) && promises.map((p, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-[#E3C28E]/60 text-xs mt-1 select-none">✦</span>
                <p className="font-serif text-gray-600 text-sm leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Section: Full Chaplet Prayer Texts */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.52 }}
          className="mb-10"
          aria-labelledby="full-prayers-heading"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#E3C28E] text-lg select-none">📖</span>
            <h2 id="full-prayers-heading" className="font-serif text-xl text-gray-800">
              {t('divinaMisericordia.chapletFullPrayers.sectionTitle')}
            </h2>
          </div>
          <div className="space-y-2">
            {Array.isArray(fullPrayers) && fullPrayers.map((prayer, i) => (
              <div key={prayer.id} className="border border-[#E3C28E]/25 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenPrayerIdx(openPrayerIdx === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-3 bg-white hover:bg-[#E3C28E]/5 transition-colors duration-200 text-left"
                  aria-expanded={openPrayerIdx === i}
                >
                  <span className="font-serif text-gray-700 text-sm md:text-base font-medium">{prayer.title}</span>
                  <span className="text-[#E3C28E] text-sm ml-4 flex-shrink-0 transition-transform duration-200" style={{ transform: openPrayerIdx === i ? 'rotate(90deg)' : 'rotate(0deg)' }}>▶</span>
                </button>
                <AnimatePresence initial={false}>
                  {openPrayerIdx === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="font-serif text-gray-600 text-sm leading-relaxed italic px-5 py-4 bg-[#FDFAF5] border-t border-[#E3C28E]/15">
                        {prayer.text}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Section: JPII Act of Entrustment */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.54 }}
          className="mb-12 bg-white border border-[#E3C28E]/30 rounded-lg p-8 shadow-sm"
          aria-labelledby="jpii-heading"
        >
          <div className="text-center mb-6">
            <span className="text-[#E3C28E] text-2xl select-none">✝</span>
            <h2 id="jpii-heading" className="font-serif text-xl text-gray-800 mt-3 mb-1">
              {t('divinaMisericordia.jpiiPrayer.title')}
            </h2>
            <p className="font-serif text-[#E3C28E] text-xs tracking-widest uppercase">
              {t('divinaMisericordia.jpiiPrayer.subtitle')}
            </p>
          </div>
          <p className="font-serif text-gray-500 text-xs italic text-center mb-6">
            {t('divinaMisericordia.jpiiPrayer.intro')}
          </p>
          <div className="border-l-2 border-[#E3C28E]/40 pl-5 space-y-3">
            {Array.isArray(jpiiParagraphs) && jpiiParagraphs.map((para, i) => (
              <p key={i} className="font-serif text-gray-700 leading-relaxed text-sm md:text-base italic">
                {para}
              </p>
            ))}
          </div>
        </motion.section>

        {/* Navigation buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/home"
            className="px-8 py-3 border border-[#E3C28E] text-[#E3C28E] font-serif text-sm tracking-[0.2em] uppercase hover:bg-[#E3C28E]/10 transition-all duration-300 rounded-sm text-center"
          >
            {t('divinaMisericordia.backHome')}
          </Link>
          <Link
            to="/sacro-cuore"
            className="px-8 py-3 bg-[#E3C28E]/10 border border-[#E3C28E] text-[#E3C28E] font-serif text-sm tracking-[0.2em] uppercase hover:bg-[#E3C28E]/20 transition-all duration-300 rounded-sm text-center"
          >
            {t('divinaMisericordia.toSacroCuore')}
          </Link>
        </motion.div>
      </main>

      <Footer />
    </motion.div>
  );
}
