import styles from './Avatar.module.css';
import classNames from 'classnames';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export function Avatar({ src, alt, size = 'medium', className }: AvatarProps) {
  const avatarClasses = classNames(styles.avatar, styles[size], className);

  return <img src={src} alt={alt} className={avatarClasses} />;
}
