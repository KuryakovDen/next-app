'use client';

import { Avatar } from '@/shared/ui/Avatar';
import { User } from '@/features/notifications/types/notifications.types';
import { MouseEvent, useCallback, useMemo, memo } from 'react';
import styles from './NotificationUserInfo.module.css';

interface NotificationUserInfoProps {
  user: User;
  isMobile: boolean;
  onAvatarClick?: () => void;
}

export const NotificationUserInfo = memo(function NotificationUserInfo({
  user,
  isMobile,
  onAvatarClick,
}: NotificationUserInfoProps) {
  const handleAvatarClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      onAvatarClick?.();
    },
    [onAvatarClick],
  );

  const displayName = useMemo(
    () => (isMobile ? user.name.split(' ')[0] : user.name),
    [user.name, isMobile],
  );

  const username = useMemo(() => !isMobile && `@${user.username}`, [user.username, isMobile]);

  const userAvatar = useMemo(
    () => <Avatar src={user.avatar} alt={user.name} size={isMobile ? 'small' : 'medium'} />,
    [user.avatar, user.name, isMobile],
  );

  const genderIcon = useMemo(() => {
    if (user.gender === 'male') {
      return <span className={styles.maleIcon}>&#9794;</span>; // ♂
    }
    if (user.gender === 'female') {
      return <span className={styles.femaleIcon}>&#9792;</span>; // ♀
    }
    return null;
  }, [user.gender]);

  return (
    <div className={styles.userInfo} onClick={handleAvatarClick} data-prevent-card-click="true">
      {userAvatar}
      <div className={styles.userText}>
        <span className={styles.userName}>{displayName}</span>
        <div className={styles.userNameWrapper}>
          {genderIcon}
          {username && <span className={styles.userUsername}>{username}</span>}
          {user.isVerified && <span className={styles.verifiedIcon}>&#10004;</span>}
        </div>
      </div>
    </div>
  );
});
