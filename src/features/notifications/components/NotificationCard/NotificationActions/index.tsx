'use client';

import { Icon } from '@/shared/ui/Icon';
import { MouseEvent, useCallback, memo } from 'react';
import styles from './NotificationActions.module.css';
import { useTimeAgo } from '@/hooks/useTimeAgo';
import { useFormattedTime } from '@/hooks/useFormattedTime';

interface NotificationActionsProps {
  isMobile: boolean;
  onMenuClick?: () => void;
  time: string;
}

export const NotificationActions = memo(function NotificationActions({
  isMobile,
  onMenuClick,
  time,
}: NotificationActionsProps) {
  const notificationTime = useFormattedTime(time, isMobile);

  const handleMenuClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onMenuClick?.();
    },
    [onMenuClick],
  );

  return (
    <div className={styles.actions} data-prevent-card-click="true">
      <span className={styles.time}>{useTimeAgo(notificationTime)}</span>
      <button className={styles.menuButton} onClick={handleMenuClick}>
        <Icon name="more" size={isMobile ? 16 : 20} />
      </button>
    </div>
  );
});
