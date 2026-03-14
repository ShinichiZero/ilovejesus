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

export default function Home() {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-white flex flex-col"
    >
      <Navbar />

      <main id="main-content" className="flex-1 flex flex-col items-center justify-center px-6 pt-24 pb-12 text-center">
        {/* Decorative cross */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="mb-6"
        >
          <span className="text-5xl text-[#E3C28E] select-none">✝</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl tracking-wide text-gray-800 mb-3"
        >
          {t('home.title')}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="font-serif text-[#E3C28E] text-lg md:text-xl tracking-widest mb-10"
        >
          {t('home.subtitle')}
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-32 h-px bg-[#E3C28E]/50 mb-10"
        />

        {/* Welcome text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="max-w-xl font-serif text-base md:text-lg text-gray-600 italic leading-relaxed mb-14"
        >
          {t('home.welcome')}
        </motion.p>

        {/* Nav buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 flex-wrap justify-center"
        >
          <Link
            to="/life"
            className="px-8 py-3 border border-[#E3C28E] text-[#E3C28E] font-serif text-sm tracking-[0.2em] uppercase hover:bg-[#E3C28E]/10 transition-all duration-300 rounded-sm"
          >
            {t('home.exploreLife')}
          </Link>
          <Link
            to="/miracles"
            className="px-8 py-3 bg-[#E3C28E]/10 border border-[#E3C28E] text-[#E3C28E] font-serif text-sm tracking-[0.2em] uppercase hover:bg-[#E3C28E]/20 transition-all duration-300 rounded-sm"
          >
            {t('home.exploreMiracles')}
          </Link>
          <Link
            to="/divina-misericordia"
            className="px-8 py-3 border border-[#E3C28E]/70 text-[#E3C28E] font-serif text-sm tracking-[0.2em] uppercase hover:bg-[#E3C28E]/10 transition-all duration-300 rounded-sm"
          >
            {t('home.exploreDivinaMisericordia')}
          </Link>
          <Link
            to="/sacro-cuore"
            className="px-8 py-3 border border-[#C0392B]/30 text-[#C0392B]/70 font-serif text-sm tracking-[0.2em] uppercase hover:bg-[#C0392B]/5 transition-all duration-300 rounded-sm"
          >
            {t('home.exploreSacroCuore')}
          </Link>
        </motion.div>
      </main>

      <Footer />
    </motion.div>
  );
}
