import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

export default function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();

  const links = [
    { to: '/home', label: t('nav.home') },
    { to: '/life', label: t('nav.life') },
    { to: '/miracles', label: t('nav.miracles') },
    { to: '/divina-misericordia', label: t('nav.divinaMisericordia') },
    { to: '/sacro-cuore', label: t('nav.sacroCuore') },
    { to: '/san-michele', label: t('nav.sanMichele') },
    { to: '/rosario', label: t('nav.rosario') },
  ];

  return (
    <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#E3C28E]/20">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          to="/home"
          className="text-[#E3C28E] font-serif text-lg tracking-widest uppercase"
        >
          ✝
        </Link>
        <div className="flex items-center gap-4 overflow-x-auto">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-serif tracking-wide transition-colors duration-200 ${
                location.pathname === link.to
                  ? 'text-[#E3C28E]'
                  : 'text-gray-500 hover:text-[#E3C28E]'
              }`}
              aria-current={location.pathname === link.to ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <LanguageSelector />
      </div>
    </nav>
  );
}
