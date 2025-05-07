import { memo, MouseEvent, useCallback, useMemo, useState } from 'react';
import styles from './NotificationContent.module.css';
import { useFormattedText } from '@/hooks/useFormattedText';
import { Button } from '@/shared/ui/Button';
import type { Notification } from '@/features/notifications/types/notifications.types';

interface NotificationContentProps {
  notification: Notification;
  isMobile: boolean;
  viewport: string;
  initialSubscribed?: boolean;
  onSubscribeChange?: (isSubscribed: boolean) => void;
}

// Константа для максимальной длины текста на мобильных устройствах
const MOBILE_TEXT_MAX_LENGTH = 50;

export const NotificationContent = memo(function NotificationContent({
                                                                       notification,
                                                                       isMobile,
                                                                       viewport,
                                                                       initialSubscribed = false,
                                                                       onSubscribeChange,
                                                                     }: NotificationContentProps) {
  const [isSubscribed, setIsSubscribed] = useState(initialSubscribed);

  const displayText = useMemo(() => {
    switch (notification.type) {
      case 'subscribed':
        return 'У вас новый подписчик';
      case 'like':
        return 'Лайкнул ваш пост';
      case 'comment':
        return notification.text;
      default:
        return notification.text;
    }
  }, [notification.type, notification.text]);

  const notificationText = useFormattedText(displayText, MOBILE_TEXT_MAX_LENGTH, isMobile);

  const subscribeButtonSize = useMemo(() => (viewport === 'tablet' ? 'small' : 'medium'), [viewport]);

  const subscribeText = useMemo(() => (isSubscribed ? 'Подписан' : 'Подписаться'), [isSubscribed]);

  const handleSubscribe = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      const newState = !isSubscribed;
      setIsSubscribed(newState);
      onSubscribeChange?.(newState);
    },
    [isSubscribed, onSubscribeChange],
  );

  const showSubscribeButton = notification.type === 'subscribed';

  // Для всех кроме подписок показываем картинку поста из postUrl
  const showPostPreview = notification.type !== 'subscribed' && !!notification.postUrl;

  return (
    <div className={styles.content}>
      <div className={styles.textWrapper}>
        <p className={styles.text}>{notificationText}</p>

        {showSubscribeButton && (
          <Button
            variant={isSubscribed ? 'secondary' : 'primary'}
            size={subscribeButtonSize}
            onClick={handleSubscribe}
          >
            {subscribeText}
          </Button>
        )}
      </div>

      {showPostPreview && (
        <div className={styles.imageContainer}>
          <img
            src={notification.postUrl}
            alt="preview of post"
            className={styles.image}
            loading={isMobile ? 'lazy' : 'eager'}
          />
        </div>
      )}
    </div>
  );
});
