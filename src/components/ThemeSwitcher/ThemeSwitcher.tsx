import AppButton, { AppButtonVariant } from '@components/custom/AppButton/AppButton';
import cn from 'classnames';
import useTheme from '@hooks/useTheme';
import { useMemo } from 'react';
import { Theme } from '@context/ThemeContext';
import LightIcon from '@assets/icons/light.svg';
import DarkIcon from '@assets/icons/dark.svg';
import styles from './ThemeSwitcher.module.scss';

enum SwitchIconColor {
  LIGHT = 'rgb(255,234,0)',
  DARK = 'rgb(100,0,255)',
};

type ThemeSwitcherProps = {
  className?: string
};

function ThemeSwitcher(props: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = useMemo(() => {
    switch (theme) {
      case Theme.LIGHT: return <LightIcon fill={SwitchIconColor.LIGHT} />
      case Theme.DARK: return <DarkIcon fill={SwitchIconColor.DARK} />
      default: return ''
    }
  }, [theme]);

  return (
    <AppButton
      className={cn(styles.ThemeSwitcher, {}, [props.className])}
      variant={AppButtonVariant.TEXT_CONTRAST}
      onClick={toggleTheme}
      text={themeIcon}
    />
  );
};

export default ThemeSwitcher;