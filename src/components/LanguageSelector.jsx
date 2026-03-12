import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'la', label: 'Latina' },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center gap-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
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
