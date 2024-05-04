import { ReactNode } from 'react';
import cn from 'classnames';
import AppPortal from '@components/custom/AppPortal/AppPortal';
import styles from './AppModal.module.scss';

type AppModalProps = {
  className?: string
  children?: ReactNode
  title?: string
  isOpen?: boolean
  onClose?: () => void
}

function AppModal(props: AppModalProps) {
  const {
    className,
    children,
    title,
    isOpen,
    onClose,
  } = props;

  const handleClose = () => {
    if (onClose) {
      onClose()
    };
  };

  const modalMods = {
    [styles.opened]: isOpen,
  };

  return (
    <AppPortal>
      <div className={cn(styles.AppModal, modalMods, [className])}>
        <div
          role="presentation"
          className={styles.overlay}
          onClick={handleClose}
        />
        <div className={styles.content}>
          {title && (
          <div className={styles.title}>
            {title}
          </div>
          )}
          {children}
        </div>
      </div>
    </AppPortal>
  );
};

export default AppModal;