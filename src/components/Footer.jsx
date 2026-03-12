import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full py-6 mt-auto">
      <p className="text-center italic text-[#E3C28E] text-sm opacity-80">
        {t('footer.dedication')}
      </p>
    </footer>
  );
}
