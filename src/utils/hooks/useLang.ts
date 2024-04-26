import { useCallback, useState } from 'react';
import i18n from '@config/i18n/i18n';

export enum Language {
  RU = 'ru',
  EN = 'en',
};

const useLang = () => {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const toggleLanguage = useCallback(() => {
    const updatedLanguage = currentLanguage === Language.RU ? Language.EN : Language.RU
    setCurrentLanguage(updatedLanguage)
    i18n.changeLanguage(updatedLanguage)
  }, [currentLanguage]);

  return {
    currentLanguage,
    toggleLanguage,
  };
};

export default useLang;