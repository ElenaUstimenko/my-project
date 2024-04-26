import AppButton, { AppButtonVariant, ComponentType } from '@components/custom/AppButton/AppButton';
import { AppRoutes, RoutePaths } from '@config/routes/routes.config';
import ThemeSwitcher from '@components/ThemeSwitcher/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import LangSwitcher from '@components/LangSwitcher/LangSwitcher';
import styles from './Navbar.module.scss';

type NavbarProps = {
  className?: string
};

function Navbar(props: NavbarProps) {
  const { className } = props;

  const { t } = useTranslation('about');

  return (
    <div className={cn(styles.Navbar, {}, [className])}>
      <div className={styles.switchers}>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
      <div className={cn(styles.links)}>
        <AppButton
          className={cn(styles.btnNavbar)}
          componentType={ComponentType.link}
          to={RoutePaths[AppRoutes.MAIN]}
          variant={AppButtonVariant.TEXT_CONTRAST}
          text={t('textBtn1')}
        />
        <AppButton
          className={cn(styles.btnNavbar)}
          componentType={ComponentType.link}
          to={RoutePaths[AppRoutes.ABOUT]}
          variant={AppButtonVariant.TEXT_CONTRAST}
          text={t('textBtn2')}
        />
      </div>
    </div>
  );
};

export default Navbar;