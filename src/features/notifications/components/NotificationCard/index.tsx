'use client';

import { useViewport } from '@/hooks/useViewport';
import { Notification } from '@/features/notifications/types/notifications.types';
import { MouseEvent, useCallback } from 'react';
import classNames from 'classnames';
import styles from './NotificationCard.module.css';
import { NotificationUserInfo } from './NotificationUserInfo';
import { NotificationActions } from './NotificationActions';
import { NotificationContent } from './NotificationContent';

interface NotificationCardProps {
  notification: Notification;
  isGrouped?: boolean;
  onClick?: () => void;
  onAvatarClick?: () => void;
  onMenuClick?: () => void;
  onSubscribe?: (isSubscribed: boolean) => void;
  className?: string;
}

export function NotificationCard({
  notification,
  isGrouped = false,
  onClick,
  onAvatarClick,
  onMenuClick,
  onSubscribe,
  className,
}: NotificationCardProps) {
  const { viewport, isMobile } = useViewport();

  const handleCardClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const target = e.target as HTMLElement;

      // Если клик был на элементе с этим атрибутом — отменяем действие
      if (target.closest('[data-prevent-card-click="true"]')) return;
      onClick?.();
    },
    [onClick],
  );

  const cardClasses = classNames(
    styles.card,
    {
      [styles.grouped]: isGrouped,
      [styles[`card-${viewport}`]]: viewport,
    },
    className,
  );

  const headerClasses = classNames(styles.header);

  return (
    <div className={cardClasses} onClick={handleCardClick}>
      <div className={headerClasses}>
        <NotificationUserInfo
          user={notification.user}
          isMobile={isMobile}
          onAvatarClick={onAvatarClick}
        />
        <NotificationActions
          isMobile={isMobile}
          onMenuClick={onMenuClick}
          time={notification.time}
        />
      </div>
      <NotificationContent
        initialSubscribed={false}
        viewport="desktop"
        onSubscribeChange={onSubscribe}
        notification={notification}
        isMobile={isMobile}
      />
    </div>
  );
}
