import cn from 'classnames';
import AppButton, { AppButtonVariant, ComponentType } from '@components/custom/AppButton/AppButton';
import { AppRoutes, RoutePaths } from '@config/routes/routes.config';
import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Sidebar.module.scss';

type SidebarProps = {
  className?: string
};

function Sidebar(props: SidebarProps) {

  const { t } = useTranslation('about');

  const [isCollapsed, setIsCollapsed] = useState(false);

  const onToggle = useCallback(() => {
    setIsCollapsed((s) => !s)
  }, []);

  const mods = useMemo(() => ({
    [styles.collapsed]: isCollapsed,
  }), [isCollapsed]);

  return (
    <div className={cn(styles.Sidebar, mods, [props.className])} data-testid="Sidebar">
      <AppButton
				className={styles.link}
				componentType={ComponentType.link}
				to={RoutePaths[AppRoutes.MAIN]}
				variant={AppButtonVariant.TEXT_CONTRAST}
				text={t('textBtn3')}
				hasPathIcon
				isTextHidden={isCollapsed}
			/>
			<AppButton
				className={styles.link}
				componentType={ComponentType.link}
				to={RoutePaths[AppRoutes.ABOUT]}
				variant={AppButtonVariant.TEXT_CONTRAST}
				text={t('textBtn4')}
				hasPathIcon
				isTextHidden={isCollapsed}
			/>
      <AppButton
        className={styles.collapsedBtn}
        text={isCollapsed ? '<' : '>'}
        variant={AppButtonVariant.CONTAINED}
        onClick={onToggle}
      />
    </div>
  );
};

export default Sidebar;