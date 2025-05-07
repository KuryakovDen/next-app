export function useTimeAgo(isoTime: string): string {
  const now = new Date();
  const date = new Date(isoTime);
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  enum Intervals {
    year = 31536000,
    month = 2592000,
    week = 604800,
    day = 86400,
    hour = 3600,
    minute = 60,
  }

  if (diffInSeconds < 60) {
    return 'только что';
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / Intervals.minute);
    return `${minutes} ${getRussianNoun(minutes, 'минуту', 'минуты', 'минут')} назад`;
  } else if (diffInSeconds < Intervals.day) {
    const hours = Math.floor(diffInSeconds / Intervals.hour);
    return `${hours} ${getRussianNoun(hours, 'час', 'часа', 'часов')} назад`;
  } else if (diffInSeconds < Intervals.week) {
    const days = Math.floor(diffInSeconds / Intervals.day);
    return `${days} ${getRussianNoun(days, 'день', 'дня', 'дней')} назад`;
  } else if (diffInSeconds < Intervals.month) {
    const weeks = Math.floor(diffInSeconds / Intervals.week);
    return `${weeks} ${getRussianNoun(weeks, 'неделю', 'недели', 'недель')} назад`;
  } else if (diffInSeconds < Intervals.year) {
    const months = Math.floor(diffInSeconds / Intervals.month);
    return `${months} ${getRussianNoun(months, 'месяц', 'месяца', 'месяцев')} назад`;
  } else {
    const years = Math.floor(diffInSeconds / Intervals.year);
    return `${years} ${getRussianNoun(years, 'год', 'года', 'лет')} назад`;
  }
}

function getRussianNoun(number: number, one: string, two: string, five: string): string {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
}
