'use client';

import { useMemo, useState, useCallback } from 'react';
import { useViewport } from '@/hooks/useViewport';
import { NotificationCard } from '../NotificationCard';
import { Notification, TabType } from '@/features/notifications/types/notifications.types';
import styles from './NotificationList.module.css';
import classNames from 'classnames';
import { ActionLog } from '../NotificationList/ActionLog/index';

interface NotificationListProps {
  notifications: Notification[];
  activeTab: TabType;
}

export function NotificationList({ notifications, activeTab }: NotificationListProps) {
  const { isMobile, isTablet } = useViewport();
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});
  const [actions, setActions] = useState<string[]>([]);

  // Фильтрация уведомлений
  const filteredNotifications = useMemo(() => {
    return notifications.filter((notification) => {
      if (activeTab === 'all') return true;
      if (activeTab === 'interactions') {
        return ['like', 'subscribe', 'subscribed', 'comment'].includes(notification.type);
      }
      if (activeTab === 'mentions') {
        return notification.type === 'mention';
      }
      return true;
    });
  }, [notifications, activeTab]);

  // Группировка уведомлений
  const groupedNotifications = useMemo(() => {
    return filteredNotifications.reduce<Record<string, Notification[]>>((groups, notification) => {
      const key = notification.user.id;
      groups[key] = groups[key] || [];
      groups[key].push(notification);
      return groups;
    }, {});
  }, [filteredNotifications]);

  const addAction = useCallback((message: string) => {
    setActions((prev) => [...prev, message]);
  }, []);

  const handleAvatarClick = useCallback(
    (userId: string) => {
      addAction(`Действие 1: аватарка была кликнута пользователем ${userId}`);
    },
    [addAction],
  );

  const handleCardClick = useCallback(
    (userId: string) => {
      setExpandedGroups((prev) => ({ ...prev, [userId]: !prev[userId] }));
      addAction(`Действие 2: карточка была кликнута пользователем ${userId}`);
    },
    [addAction],
  );

  const handleMenuClick = useCallback(
    (userId: string) => {
      addAction(`Действие 3: меню было кликнуто пользователем ${userId}`);
    },
    [addAction],
  );

  const handleSubscribe = useCallback(
    (userId: string) => {
      addAction(`Подписка была переключена пользователем ${userId}`);
    },
    [addAction],
  );

  const notificationsClasses = classNames(styles.notifications, {
    [styles.mobile]: isMobile,
    [styles.tablet]: isTablet,
  });

  return (
    <div className={styles.container}>
      <div className={notificationsClasses}>
        {Object.entries(groupedNotifications).map(([userId, userNotifications]) => {
          const isExpanded = expandedGroups[userId] || userNotifications.length === 1;

          return (
            <div key={userId} className={styles.notificationGroup}>
              {isExpanded ? (
                userNotifications.map((notification) => (
                  <NotificationCard
                    key={notification.id}
                    notification={notification}
                    onAvatarClick={() => handleAvatarClick(userId)}
                    onMenuClick={() => handleMenuClick(userId)}
                    onSubscribe={() => handleSubscribe(userId)}
                  />
                ))
              ) : (
                <NotificationCard
                  notification={userNotifications[0]}
                  isGrouped
                  onClick={() => handleCardClick(userId)}
                  onAvatarClick={() => handleAvatarClick(userId)}
                  onMenuClick={() => handleMenuClick(userId)}
                  onSubscribe={() => handleSubscribe(userId)}
                />
              )}
            </div>
          );
        })}
      </div>

      <ActionLog actions={actions} isMobile={isMobile} />
    </div>
  );
}
