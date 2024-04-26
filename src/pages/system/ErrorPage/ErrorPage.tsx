import { useTranslation } from 'react-i18next';
import styles from './ErrorPage.module.scss';

function ErrorPage() {
  const { t } = useTranslation('')

  return (
    <div className={styles.ErrorPage}>
      <h2>{t('errorPageTitle')}</h2>
    </div>
  );
};

export default ErrorPage;