import AppButton, { AppButtonVariant } from '@components/custom/AppButton/AppButton';
import useLang, { Language } from '@hooks/useLang';
import RusFlag from '@assets/icons/lang/flag-ru.svg';
import EngFlag from '@assets/icons/lang/flag-en.svg';
import cn from 'classnames';
import useTheme from '@hooks/useTheme';
import styles from './LangSwitcher.module.scss';

type LangSwitcherProps = {
  className?: string
};

function LangSwitcher(props: LangSwitcherProps) {
  const { currentLanguage, toggleLanguage } = useLang();

  const getLangIcon = currentLanguage === Language.RU
    ? <RusFlag />
    : <EngFlag />

  return (
    <AppButton
    className={cn(styles.LangSwitcher, {}, [props.className])}
      variant={AppButtonVariant.TEXT_CONTRAST}
      onClick={toggleLanguage}
      text={getLangIcon}
    />
  );
};

export default LangSwitcher;