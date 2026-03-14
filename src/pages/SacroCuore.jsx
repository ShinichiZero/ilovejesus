import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

export default function SacroCuore() {
  const { t } = useTranslation();

  const twelvePromises = t('sacroCuore.twelvePromises.list', { returnObjects: true });
  const consecrationLines = t('sacroCuore.consecration.text', { returnObjects: true });

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-[#FDF8F8] flex flex-col"
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
          <span className="text-4xl select-none">❤</span>
          <h1 className="font-serif text-3xl md:text-4xl text-gray-800 mt-4 mb-2">
            {t('sacroCuore.title')}
          </h1>
          <p className="font-serif text-[#C0392B]/60 text-sm tracking-widest uppercase">
            {t('sacroCuore.subtitle')}
          </p>
          <div className="w-24 h-px bg-[#C0392B]/20 mx-auto mt-6" />
        </motion.div>

        {/* Central Promise */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white border border-[#C0392B]/20 rounded-lg p-8 mb-10 text-center shadow-sm"
        >
          <span className="text-[#C0392B]/50 text-2xl select-none mb-4 block">❤</span>
          <blockquote className="font-serif text-gray-700 italic text-base md:text-lg leading-relaxed">
            {t('sacroCuore.promise')}
          </blockquote>
          <p className="mt-4 text-xs text-[#C0392B]/60 tracking-widest uppercase font-medium">
            {t('sacroCuore.promiseSource')}
          </p>
        </motion.div>

        {/* Image placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center mb-10"
        >
          <div className="w-48 h-64 border-2 border-dashed border-[#C0392B]/30 rounded-lg flex flex-col items-center justify-center bg-white/60 text-center px-4">
            <span className="text-4xl text-[#C0392B]/40 select-none mb-3">❤</span>
            <p className="font-serif text-[#C0392B]/50 text-xs italic leading-snug">
              {t('sacroCuore.imageCaption')}
            </p>
          </div>
          <p className="mt-3 font-serif text-[#C0392B]/70 text-sm italic tracking-wide">
            {t('sacroCuore.imageMotto')}
          </p>
        </motion.div>

        {/* Section: 12 Promises */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mb-10"
          aria-labelledby="promises-heading"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#C0392B]/60 text-lg select-none">❤</span>
            <h2 id="promises-heading" className="font-serif text-xl text-gray-800">
              {t('sacroCuore.twelvePromises.title')}
            </h2>
          </div>
          <p className="font-serif text-gray-500 text-sm italic mb-5 pl-8">
            {t('sacroCuore.twelvePromises.intro')}
          </p>
          <div className="space-y-3">
            {Array.isArray(twelvePromises) && twelvePromises.map((promise, i) => (
              <div
                key={i}
                className="flex gap-4 bg-white border border-[#C0392B]/15 rounded-lg p-4 hover:border-[#C0392B]/35 transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-7 h-7 rounded-full border border-[#C0392B]/40 flex items-center justify-center text-[#C0392B]/70 text-xs font-serif font-bold">
                  {i + 1}
                </div>
                <p className="font-serif text-gray-600 text-sm leading-relaxed">{promise}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Section: First Fridays */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-10 bg-[#C0392B]/5 border border-[#C0392B]/15 rounded-lg p-6"
          aria-labelledby="first-fridays-heading"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#C0392B]/60 text-xl select-none">📅</span>
            <h2 id="first-fridays-heading" className="font-serif text-xl text-gray-800">
              {t('sacroCuore.firstFridays.title')}
            </h2>
          </div>
          <p className="font-serif text-gray-700 leading-relaxed text-sm md:text-base mb-3">
            {t('sacroCuore.firstFridays.text1')}
          </p>
          <p className="font-serif text-gray-700 leading-relaxed text-sm md:text-base mb-3">
            {t('sacroCuore.firstFridays.text2')}
          </p>
          <p className="font-serif text-gray-700 leading-relaxed text-sm md:text-base">
            {t('sacroCuore.firstFridays.text3')}
          </p>
        </motion.section>

        {/* Section: Act of Consecration */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mb-12"
          aria-labelledby="consecration-heading"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#C0392B]/60 text-lg select-none">🕯</span>
            <h2 id="consecration-heading" className="font-serif text-xl text-gray-800">
              {t('sacroCuore.consecration.title')}
            </h2>
          </div>
          <div className="bg-white border border-[#C0392B]/15 rounded-lg p-6">
            <p className="font-serif text-gray-500 text-sm italic mb-4">
              {t('sacroCuore.consecration.intro')}
            </p>
            <div className="space-y-3 border-l-2 border-[#C0392B]/20 pl-5">
              {Array.isArray(consecrationLines) && consecrationLines.map((line, i) => (
                <p key={i} className="font-serif text-gray-700 text-sm leading-relaxed italic">
                  {line}
                </p>
              ))}
            </div>
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
            {t('sacroCuore.backHome')}
          </Link>
          <Link
            to="/divina-misericordia"
            className="px-8 py-3 bg-[#C0392B]/5 border border-[#C0392B]/30 text-[#C0392B]/70 font-serif text-sm tracking-[0.2em] uppercase hover:bg-[#C0392B]/10 transition-all duration-300 rounded-sm text-center"
          >
            {t('sacroCuore.toDivinaMisericordia')}
          </Link>
        </motion.div>
      </main>

      <Footer />
    </motion.div>
  );
}
