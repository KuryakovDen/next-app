'use client';

import { TabType } from '@/features/notifications/types/notifications.types';
import classNames from 'classnames';
import styles from './NotificationTabs.module.css';

interface NotificationTabsProps {
  activeTab: TabType;
  onTabChangeAction: (tab: TabType) => void;
}

const TAB_LABELS = {
  all: 'Все',
  interactions: 'Действия',
  mentions: 'Упоминания',
} as const;

export function NotificationTabs({ activeTab, onTabChangeAction }: NotificationTabsProps) {
  return (
    <div className={styles.tabsContainer}>
      {(Object.keys(TAB_LABELS) as TabType[]).map((tab) => (
        <button
          key={tab}
          className={classNames(styles.tab, {
            [styles.active]: activeTab === tab,
          })}
          onClick={() => onTabChangeAction(tab)}
          aria-current={activeTab === tab ? 'page' : undefined}
        >
          {TAB_LABELS[tab]}
        </button>
      ))}
    </div>
  );
}
