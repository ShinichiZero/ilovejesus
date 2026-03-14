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

// Accordion item used in guide and prayers tabs
function AccordionItem({ title, subtitle, children, isOpen, onToggle }) {
  return (
    <div className="border border-[#E3C28E]/25 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-3.5 bg-white hover:bg-[#E3C28E]/5 transition-colors duration-200 text-left"
        aria-expanded={isOpen}
      >
        <div>
          <span className="font-serif text-gray-700 text-sm md:text-base font-medium block">{title}</span>
          {subtitle && <span className="font-serif text-gray-400 text-xs italic">{subtitle}</span>}
        </div>
        <span
          className="text-[#E3C28E] text-sm ml-4 flex-shrink-0 transition-transform duration-200"
          style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
        >
          ▶
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 py-4 bg-[#FDFAF5] border-t border-[#E3C28E]/15">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Rosario() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('guide');
  const [mysteryType, setMysteryType] = useState('joyful');
  const [openStep, setOpenStep] = useState(null);
  const [openPrayer, setOpenPrayer] = useState(null);

  const tabs = t('rosario.tabs', { returnObjects: true });
  const mysteryTypes = t('rosario.mysteryTypes', { returnObjects: true });
  const mysteries = t(`rosario.mysteries.${mysteryType}`, { returnObjects: true });
  const allMysteries = t('rosario.mysteries', { returnObjects: true });
  const guide = t('rosario.guide', { returnObjects: true });
  const prayers = t('rosario.prayers.list', { returnObjects: true });

  // Build guide steps: opening, 5 decades, closing
  const guideSteps = [];
  if (guide && guide.opening) {
    guideSteps.push({ type: 'opening', data: guide.opening });
  }
  if (Array.isArray(mysteries)) {
    mysteries.forEach((m, i) => {
      guideSteps.push({ type: 'decade', index: i + 1, mystery: m, data: guide });
    });
  }
  if (guide && guide.closing) {
    guideSteps.push({ type: 'closing', data: guide.closing });
  }

  const toggleStep = (i) => setOpenStep(openStep === i ? null : i);
  const togglePrayer = (i) => setOpenPrayer(openPrayer === i ? null : i);

  const selectedMysteryObj = Array.isArray(mysteryTypes) ? mysteryTypes.find((m) => m.id === mysteryType) : null;

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
          className="text-center mb-10"
        >
          <span className="text-4xl select-none">📿</span>
          <h1 className="font-serif text-3xl md:text-4xl text-gray-800 mt-4 mb-2">
            {t('rosario.title')}
          </h1>
          <p className="font-serif text-[#E3C28E] text-sm tracking-widest uppercase">
            {t('rosario.subtitle')}
          </p>
          <p className="font-serif text-gray-500 text-sm leading-relaxed mt-4 max-w-lg mx-auto">
            {t('rosario.intro')}
          </p>
          <div className="w-24 h-px bg-[#E3C28E]/40 mx-auto mt-6" />
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-1 mb-8 bg-white border border-[#E3C28E]/25 rounded-lg p-1"
          role="tablist"
        >
          {['guide', 'mysteries', 'prayers'].map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => { setActiveTab(tab); setOpenStep(null); setOpenPrayer(null); }}
              className={`flex-1 py-2 px-3 font-serif text-xs md:text-sm tracking-wide rounded-md transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-[#E3C28E]/15 text-[#C4963A] border border-[#E3C28E]/40'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-[#E3C28E]/5'
              }`}
            >
              {tabs[tab]}
            </button>
          ))}
        </motion.div>

        {/* Mystery Type Selector (shown on guide and mysteries tabs) */}
        {(activeTab === 'guide' || activeTab === 'mysteries') && (
          <motion.div
            key="mystery-selector"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <p className="font-serif text-xs text-[#E3C28E] tracking-widest uppercase text-center mb-3">
              {t('rosario.selectMysteriesTitle')}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {Array.isArray(mysteryTypes) && mysteryTypes.map((mt) => (
                <button
                  key={mt.id}
                  onClick={() => { setMysteryType(mt.id); setOpenStep(null); }}
                  className={`py-2 px-3 font-serif text-xs rounded-lg border transition-all duration-200 text-center ${
                    mysteryType === mt.id
                      ? 'bg-[#E3C28E]/20 border-[#E3C28E]/60 text-[#C4963A]'
                      : 'bg-white border-[#E3C28E]/25 text-gray-600 hover:border-[#E3C28E]/50 hover:bg-[#E3C28E]/5'
                  }`}
                >
                  <span className="font-semibold block">{mt.name}</span>
                  <span className="text-gray-400 text-xs">{mt.days}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── TAB: GUIDE ── */}
        <AnimatePresence mode="wait">
          {activeTab === 'guide' && (
            <motion.div
              key="guide-tab"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#E3C28E] text-lg select-none">📿</span>
                <h2 className="font-serif text-xl text-gray-800">{guide.title}</h2>
              </div>

              {selectedMysteryObj && (
                <p className="font-serif text-gray-500 text-xs italic mb-5">
                  {selectedMysteryObj.name} — {selectedMysteryObj.days}
                </p>
              )}

              <div className="space-y-2">
                {guideSteps.map((step, i) => {
                  if (step.type === 'opening') {
                    return (
                      <AccordionItem
                        key="opening"
                        title={`0. ${step.data.title}`}
                        subtitle={step.data.instruction}
                        isOpen={openStep === i}
                        onToggle={() => toggleStep(i)}
                      >
                        <ul className="space-y-1.5">
                          {Array.isArray(step.data.items) && step.data.items.map((item, j) => (
                            <li key={j} className="flex gap-2 items-start">
                              <span className="text-[#E3C28E] text-xs mt-0.5 select-none">✦</span>
                              <span className="font-serif text-gray-600 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionItem>
                    );
                  }

                  if (step.type === 'decade') {
                    return (
                      <AccordionItem
                        key={`decade-${step.index}`}
                        title={`${step.index}. ${guide.decadeLabel} ${step.index} — ${step.mystery.title.replace(/^\d+\.\s*/, '')}`}
                        isOpen={openStep === i}
                        onToggle={() => toggleStep(i)}
                      >
                        <p className="font-serif text-gray-500 text-xs italic mb-3 pb-3 border-b border-[#E3C28E]/15">
                          {step.mystery.text}
                        </p>
                        <p className="font-serif text-gray-500 text-xs mb-2 uppercase tracking-wide">
                          {guide.announceMyster}
                        </p>
                        <ul className="space-y-1.5">
                          {Array.isArray(guide.decadeItems) && guide.decadeItems.map((item, j) => (
                            <li key={j} className="flex gap-2 items-start">
                              <span className="text-[#E3C28E] text-xs mt-0.5 select-none">✦</span>
                              <span className="font-serif text-gray-600 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionItem>
                    );
                  }

                  if (step.type === 'closing') {
                    return (
                      <AccordionItem
                        key="closing"
                        title={`6. ${step.data.title}`}
                        subtitle={step.data.instruction}
                        isOpen={openStep === i}
                        onToggle={() => toggleStep(i)}
                      >
                        <ul className="space-y-1.5 mb-4">
                          {Array.isArray(step.data.items) && step.data.items.map((item, j) => (
                            <li key={j} className="flex gap-2 items-start">
                              <span className="text-[#E3C28E] text-xs mt-0.5 select-none">✦</span>
                              <span className="font-serif text-gray-600 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                        {step.data.closingPrayer && (
                          <p className="font-serif text-gray-600 text-sm leading-relaxed italic border-t border-[#E3C28E]/15 pt-3">
                            {step.data.closingPrayer}
                          </p>
                        )}
                      </AccordionItem>
                    );
                  }
                  return null;
                })}
              </div>
            </motion.div>
          )}

          {/* ── TAB: MYSTERIES ── */}
          {activeTab === 'mysteries' && (
            <motion.div
              key="mysteries-tab"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[#E3C28E] text-lg select-none">✦</span>
                <h2 className="font-serif text-xl text-gray-800">
                  {selectedMysteryObj ? selectedMysteryObj.name : ''}
                </h2>
                {selectedMysteryObj && (
                  <span className="font-serif text-gray-400 text-xs">— {selectedMysteryObj.days}</span>
                )}
              </div>

              <div className="space-y-2">
                {Array.isArray(mysteries) && mysteries.map((mystery, i) => (
                  <AccordionItem
                    key={`mystery-${mysteryType}-${i}`}
                    title={mystery.title}
                    isOpen={openStep === i}
                    onToggle={() => toggleStep(i)}
                  >
                    <p className="font-serif text-gray-600 text-sm leading-relaxed italic">
                      {mystery.text}
                    </p>
                  </AccordionItem>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── TAB: PRAYERS ── */}
          {activeTab === 'prayers' && (
            <motion.div
              key="prayers-tab"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[#E3C28E] text-lg select-none">📖</span>
                <h2 className="font-serif text-xl text-gray-800">
                  {t('rosario.prayers.sectionTitle')}
                </h2>
              </div>

              <div className="space-y-2">
                {Array.isArray(prayers) && prayers.map((prayer, i) => (
                  <AccordionItem
                    key={prayer.id}
                    title={prayer.title}
                    isOpen={openPrayer === i}
                    onToggle={() => togglePrayer(i)}
                  >
                    <p className="font-serif text-gray-600 text-sm leading-relaxed italic">
                      {prayer.text}
                    </p>
                  </AccordionItem>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <Link
            to="/home"
            className="px-8 py-3 border border-[#E3C28E] text-[#E3C28E] font-serif text-sm tracking-[0.2em] uppercase hover:bg-[#E3C28E]/10 transition-all duration-300 rounded-sm text-center"
          >
            {t('rosario.backHome')}
          </Link>
          <Link
            to="/san-michele"
            className="px-8 py-3 bg-[#E3C28E]/10 border border-[#E3C28E] text-[#E3C28E] font-serif text-sm tracking-[0.2em] uppercase hover:bg-[#E3C28E]/20 transition-all duration-300 rounded-sm text-center"
          >
            {t('rosario.toSanMichele')}
          </Link>
        </motion.div>
      </main>

      <Footer />
    </motion.div>
  );
}
