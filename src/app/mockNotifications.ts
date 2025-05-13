import { Notification } from '@/features/notifications/types/notifications.types';

export const mockNotifications: Notification[] = [
  {
    id: '1',
    user: {
      id: 'user1',
      name: 'Алексей Иванов',
      username: 'alexey',
      avatar: 'https://i.pravatar.cc/150?img=1',
      gender: 'male',
      isVerified: false,
    },
    text: 'Понравился ваш пост о путешествиях!',
    type: 'like',
    time: '2023-05-15T10:30:00Z',
    isSubscribed: false,
    postUrl:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=80',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: '2',
    user: {
      id: 'user1',
      name: 'Алексей Иванов',
      username: 'alexey',
      avatar: 'https://i.pravatar.cc/150?img=1',
      gender: 'male',
      isVerified: false,
    },
    text: 'Прокомментировал ваше фото',
    type: 'comment',
    time: '2023-05-15T09:15:00Z',
    isSubscribed: true,
    postUrl:
      'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&h=100&w=100',
    image:
      'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&h=300&w=400',
  },
  {
    id: '3',
    user: {
      id: 'user2',
      name: 'Мария Петрова',
      username: 'maria',
      avatar: 'https://i.pravatar.cc/150?img=2',
      gender: 'female',
      isVerified: true,
    },
    text: 'Упомянула вас в комментарии',
    type: 'mention',
    time: '2023-05-15T07:45:00Z',
    isSubscribed: false,
    postUrl:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=100&q=80',
  },
  {
    id: '4',
    user: {
      id: 'user3',
      name: 'Иван Смирнов',
      username: 'ivan',
      avatar: 'https://i.pravatar.cc/150?img=3',
      gender: 'male',
      isVerified: true,
    },
    text: 'Подписался на вас',
    type: 'subscribed',
    time: '2023-05-14T18:00:00Z',
    isSubscribed: false,
  },
  {
    id: '5',
    user: {
      id: 'user4',
      name: 'Ольга Кузнецова',
      username: 'olga',
      avatar: 'https://i.pravatar.cc/150?img=4',
      gender: 'female',
      isVerified: false,
    },
    text: 'Понравился ваш пост о еде',
    type: 'like',
    time: '2023-05-14T15:30:00Z',
    isSubscribed: true,
    postUrl:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=100&q=80',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: '6',
    user: {
      id: 'user5',
      name: 'Дмитрий Волков',
      username: 'dmitry',
      avatar: 'https://i.pravatar.cc/150?img=5',
      gender: 'male',
      isVerified: false,
    },
    text: 'Прокомментировал ваш пост',
    type: 'comment',
    time: '2023-05-14T14:00:00Z',
    isSubscribed: false,
    postUrl:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=100&q=80',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: '7',
    user: {
      id: 'user6',
      name: 'Елена Морозова',
      username: 'elena',
      avatar: 'https://i.pravatar.cc/150?img=6',
      gender: 'female',
      isVerified: true,
    },
    text: 'Подписалась на вас',
    type: 'subscribed',
    time: '2023-05-14T13:30:00Z',
    isSubscribed: true,
  },
  {
    id: '8',
    user: {
      id: 'user7',
      name: 'Сергей Николаев',
      username: 'sergey',
      avatar: 'https://i.pravatar.cc/150?img=7',
      gender: 'male',
      isVerified: false,
    },
    text: 'Упомянул вас в посте',
    type: 'mention',
    time: '2023-05-14T12:00:00Z',
    isSubscribed: false,
    postUrl:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=100&q=80',
  },
  {
    id: '9',
    user: {
      id: 'user8',
      name: 'Анна Федорова',
      username: 'anna',
      avatar: 'https://i.pravatar.cc/150?img=8',
      gender: 'female',
      isVerified: false,
    },
    text: 'Понравился ваш пост о музыке',
    type: 'like',
    time: '2023-05-14T11:45:00Z',
    isSubscribed: false,
    postUrl:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=100&q=80',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=300&q=80',
  },
];
