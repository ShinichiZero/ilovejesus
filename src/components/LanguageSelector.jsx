import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'la', label: 'Latina' },
  { code: 'it', label: 'Italiano' },
  { code: 'de', label: 'Deutsch' },
  { code: 'fr', label: 'Français' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center gap-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          aria-pressed={i18n.language === lang.code}
          aria-label={`Change language to ${lang.label}`}
          className={`px-2 py-1 text-xs font-medium rounded transition-all duration-200 border ${
            i18n.language === lang.code
              ? 'border-[#E3C28E] text-[#E3C28E] bg-[#E3C28E]/10'
              : 'border-transparent text-gray-400 hover:text-[#E3C28E] hover:border-[#E3C28E]/50'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
