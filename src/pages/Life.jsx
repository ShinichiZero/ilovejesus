import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

const segmentKeys = [
  'annunciation',
  'baptism',
  'ministry',
  'passion',
  'resurrection',
];

const segmentIcons = ['✦', '✝', '☀', '✞', '✝'];
const segmentColors = [
  'from-[#E3C28E]/20 to-transparent',
  'from-[#E3C28E]/15 to-transparent',
  'from-[#E3C28E]/20 to-transparent',
  'from-[#E3C28E]/10 to-transparent',
  'from-[#E3C28E]/25 to-transparent',
];

export default function Life() {
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

      <main className="flex-1 max-w-3xl mx-auto px-6 pt-28 pb-16 w-full">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <span className="text-3xl text-[#E3C28E] select-none">✝</span>
          <h1 className="font-serif text-3xl md:text-4xl text-gray-800 mt-4 mb-2">
            {t('life.title')}
          </h1>
          <p className="font-serif text-[#E3C28E] text-sm tracking-widest uppercase">
            {t('life.subtitle')}
          </p>
          <div className="w-24 h-px bg-[#E3C28E]/40 mx-auto mt-6" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[#E3C28E]/30" />

          <div className="space-y-14">
            {segmentKeys.map((key, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15 * index }}
                className="relative flex gap-8"
              >
                {/* Timeline dot */}
                <div className="relative flex-shrink-0 w-12 flex items-start justify-center pt-1">
                  <div className="w-3 h-3 rounded-full bg-[#E3C28E] border-2 border-[#E3C28E]/50 shadow-sm z-10" />
                </div>

                {/* Content card */}
                <div className={`flex-1 rounded-lg p-6 bg-gradient-to-br ${segmentColors[index]} border border-[#E3C28E]/20`}>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[#E3C28E] text-lg select-none">{segmentIcons[index]}</span>
                    <h2 className="font-serif text-xl text-gray-800">
                      {t(`life.segments.${key}.title`)}
                    </h2>
                  </div>
                  <p className="text-[#E3C28E] text-xs tracking-widest uppercase mb-3 font-medium">
                    {t(`life.segments.${key}.location`)}
                  </p>
                  <p className="font-serif text-gray-600 leading-relaxed text-sm md:text-base">
                    {t(`life.segments.${key}.text`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
}
