import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const [dark, setDark] = useState(false);
  const [reading, setReading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme-dark');
    if (saved === '1') {
      document.documentElement.classList.add('dark');
      setDark(true);
    }
  }, []);

  const toggleDark = () => {
    const now = !dark;
    setDark(now);
    if (now) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme-dark', '1');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.removeItem('theme-dark');
    }
  };

  const getPreferredLangTag = (code) => {
    const map = {
      en: 'en-US',
      es: 'es-ES',
      it: 'it-IT',
      de: 'de-DE',
      fr: 'fr-FR',
      ja: 'ja-JP',
      ko: 'ko-KR',
      la: 'la',
    };
    return map[code] || code;
  };

  const chooseVoiceForLang = (langTag) => {
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return null;
    const langPrefix = langTag.split('-')[0];
    // Prefer exact language match
    let v = voices.find((x) => x.lang && x.lang.toLowerCase().startsWith(langTag.toLowerCase()));
    if (v) return v;
    // Fallback to prefix match
    v = voices.find((x) => x.lang && x.lang.toLowerCase().startsWith(langPrefix));
    if (v) return v;
    // Fallback to voices containing language name
    v = voices.find((x) => x.name && x.name.toLowerCase().includes(langPrefix));
    return v || null;
  };

  const speak = (text) => {
    if (!('speechSynthesis' in window)) return;
    if (reading) {
      window.speechSynthesis.cancel();
      setReading(false);
      return;
    }

    const langCode = i18n?.language || 'en';
    const wanted = getPreferredLangTag(langCode);

    const doSpeak = () => {
      const voices = window.speechSynthesis.getVoices();
      const voice = chooseVoiceForLang(wanted);
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = wanted;
      if (voice) utter.voice = voice;
      utter.onend = () => setReading(false);
      window.speechSynthesis.speak(utter);
      setReading(true);
    };

    // Ensure voices have loaded
    if (window.speechSynthesis.getVoices().length === 0) {
      const onVoices = () => {
        window.speechSynthesis.removeEventListener('voiceschanged', onVoices);
        doSpeak();
      };
      window.speechSynthesis.addEventListener('voiceschanged', onVoices);
      // try to trigger load
      window.speechSynthesis.getVoices();
    } else {
      doSpeak();
    }
  };

  return (
    <footer className="w-full py-6 mt-auto">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4 px-4">
        <p className="italic text-[#E3C28E] text-sm opacity-80" aria-hidden="false">
          {t('footer.dedication')}
        </p>

        <div className="flex items-center gap-2">
          <button
            aria-pressed={dark}
            aria-label={dark ? 'Disable dark mode' : 'Enable dark mode'}
            onClick={toggleDark}
            className={`px-3 py-1 text-xs font-medium rounded transition-all duration-200 border ${
              dark
                ? 'border-[#E3C28E] text-[#E3C28E] bg-[#E3C28E]/10'
                : 'border-transparent text-gray-400 hover:text-[#E3C28E] hover:border-[#E3C28E]/50'
            }`}
          >
            {dark ? 'Dark' : 'Light'}
          </button>

          <button
            aria-pressed={reading}
            aria-label={reading ? 'Stop reading' : 'Read aloud page'}
            onClick={() => speak(t('intro.dedication'))}
            className={`px-3 py-1 text-xs font-medium rounded transition-all duration-200 border ${
              reading
                ? 'border-[#E3C28E] text-[#E3C28E] bg-[#E3C28E]/10'
                : 'border-transparent text-gray-400 hover:text-[#E3C28E] hover:border-[#E3C28E]/50'
            }`}
          >
            {reading ? 'Stop' : 'Read'}
          </button>
        </div>
      </div>
    </footer>
  );
}
