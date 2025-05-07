import styles from './Icon.module.css';

type IconName = 'more' | 'like' | 'comment' | 'mention';

interface IconProps {
  name: IconName;
  size?: number;
}

export function Icon({ name, size = 20 }: IconProps) {
  return (
    <span className={styles.icon} style={{ width: size, height: size }} aria-label={name}>
      {name === 'more' && '⋮'}
      {name === 'like' && '♥'}
      {name === 'comment' && '💬'}
      {name === 'mention' && '@'}
    </span>
  );
}
