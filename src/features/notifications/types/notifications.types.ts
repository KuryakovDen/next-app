export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  gender: 'male' | 'female';
  isVerified?: boolean;
}

export type NotificationType = 'like' | 'subscribe' | 'subscribed' | 'mention' | 'comment';

export interface BaseNotification {
  id: string;
  user: User;
  text: string;
  type: NotificationType;
  time: string;
  image?: string;
  isSubscribed: boolean;
}

export interface SubscribedNotification extends BaseNotification {
  type: 'subscribed';
  postUrl?: never;
}

export interface PostNotification extends BaseNotification {
  type: Exclude<NotificationType, 'subscribed'>;
  postUrl: string;
}

export type Notification = SubscribedNotification | PostNotification;
