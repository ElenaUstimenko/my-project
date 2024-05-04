import { useContext, useEffect } from 'react';
import { Theme, ThemeContext } from '../../context/ThemeContext';
import LOCAL_STORAGE_KEYS from '../constants/localStorage';

const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme) {
      document.body.className = theme
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_KEYS.theme, newTheme)
  };

  return {
    theme,
    toggleTheme,
  };
};

export default useTheme;