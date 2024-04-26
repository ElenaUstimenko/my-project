import cn from 'classnames';
import AppButton, { AppButtonVariant } from '@components/custom/AppButton/AppButton';
import { useCallback, useMemo, useState } from 'react';
import styles from './Sidebar.module.scss';

type SidebarProps = {
  className?: string
};

function Sidebar(props: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const onToggle = useCallback(() => {
    setIsCollapsed((s) => !s)
  }, []);

  const mods = useMemo(() => ({
    [styles.collapsed]: isCollapsed,
  }), [isCollapsed]);

  return (
    <div className={cn(styles.Sidebar, mods, [props.className])} data-testid="Sidebar">
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