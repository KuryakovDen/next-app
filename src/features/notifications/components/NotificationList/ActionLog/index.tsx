'use client';

import styles from './ActionLog.module.css';

interface ActionLogProps {
  actions: string[];
  isMobile: boolean;
}

export function ActionLog({ actions, isMobile }: ActionLogProps) {
  if (isMobile) {
    return null;
  }

  return (
    <div className={styles.actionLog}>
      <h3>Список действий:</h3>
      {actions.length > 0 ? (
        <ul>
          {actions.map((log, index) => (
            <li key={index}>{log}</li>
          ))}
        </ul>
      ) : (
        <p className={styles.emptyMessage}>Действий пока нет</p>
      )}
    </div>
  );
}
