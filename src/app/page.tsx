'use client';

import { useState } from 'react';
import { NotificationTabs } from '@/features/notifications/components/NotificationTabs';
import { NotificationList } from '@/features/notifications/components/NotificationList';
import { TabType } from '@/features/notifications/types/notifications.types';
import styles from './page.module.css';
import { ThemeToggle } from '@/features/theme-toggle/components/ThemeToggle';
import { mockNotifications } from './mockNotifications';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('all');

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Уведомления</h1>
        <ThemeToggle />
      </div>

      <NotificationTabs activeTab={activeTab} onTabChangeAction={setActiveTab} />
      <NotificationList notifications={mockNotifications} activeTab={activeTab} />
    </main>
  );
}
