import { useTranslation } from 'react-i18next';

function MainPage() {
  const { t } = useTranslation('main');
  return (
    <h2>
      {t('title')}
    </h2>
  );
};

export default MainPage;