import { NavLink, NavLinkProps } from 'react-router-dom';
import { ButtonHTMLAttributes, useMemo } from 'react';
import cn from 'classnames';
import styles from './AppButton.module.scss';

export enum AppButtonVariant {
  TEXT = 'text',
  CONTAINED = 'contained',
  OUTLINED = 'outlined',
  TEXT_CONTRAST = 'text-contrast',
  CONTAINED_CONTRAST = 'contained-contrast',
  OUTLINED_CONTRAST = 'outlined-contrast',
};

export enum AppButtonSize {
  S = 's',
  M = 'm',
  L = 'l',
};

export enum ComponentType {
  button = 'button',
  link = 'link',
};

type ButtonTypeUnion = ButtonHTMLAttributes<HTMLButtonElement> | NavLinkProps

type AppButtonProps = ButtonTypeUnion & {
  className?: string
  text?: string | JSX.Element
  variant?: AppButtonVariant
  size?: AppButtonSize
  isDisabled?: boolean
  onClick?: () => void
  to?: string
  componentType?: ComponentType
};

/**
 * Компонент для кнопки или ссылки
 * @param [className] - Внешние стили
 * @param [text] - Текст
 * @param [variant] - Вариант кнопки
 * @param [size] - Размер
 * @param [isDisabled] - Заблокирована или нет
 * @param [onClick] - Действие при клике
 * @param [to] - Навигация
 * @param [componentType] - Тип компонента: кнопка или ссылка
 * @returns {JSX.Element} - Компонент кнопки или ссылки
 */

function AppButton(props: AppButtonProps) {
  const {
    componentType = ComponentType.button,
    className,
    text = '',
    variant = AppButtonVariant.TEXT,
    size = AppButtonSize.M,
    isDisabled = false,
    onClick,
    to,
  } = props;

  const containerMods = useMemo(() => ({
    [styles.disabled]: isDisabled,
    [styles.hovered]: !isDisabled,
  }), [isDisabled]);

  if (componentType === ComponentType.button) {
    return (
      <button
        type="button"
        className={cn(styles.AppButton, containerMods, [styles[variant], className])}
        onClick={onClick}
        disabled={isDisabled}
        data-testid="button"
      >
        <div
          role="presentation"
          className={cn(styles.AppButtonContainer)}
        >
          <div className={cn(styles.AppButtonStateLayer, [])} />
          <span className={cn(styles.Text, [styles[size]])} data-testid="Text" >
            {text}
          </span>
        </div>
      </button>
    );
  };

  const linkMods = useMemo(() => ({
    ...containerMods,
    [styles.linkStyles]: componentType === ComponentType.link,
  }), [componentType]);

  if (componentType === ComponentType.link) {
    return (
      <NavLink
        to={to}
        className={({ isActive }) => cn(
          styles.AppButton,
          { ...linkMods, [styles.isActive]: isActive },
				  [styles[variant], className],
        )}
        data-testid="link"
      >
        <div
          role="presentation"
          className={cn(styles.AppButtonContainer, containerMods, [styles[size]])}
        >
          <div className={cn(styles.AppButtonStateLayer, [])} />
          <span
            className={cn(styles.label, {}, [styles.Text])}
          >
            {text}
          </span>
        </div>
      </NavLink>
    );
  };
};

export default AppButton;