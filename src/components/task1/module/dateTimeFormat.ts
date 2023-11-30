import getPluralForm from "./getPluralForm";

/**
 * Функция для форматирования даты в текстовое представление.
 * @param {string} date - Строка с датой для форматирования.
 * @returns {string} - Отформатированная дата в текстовом виде.
 */
function dateTimeFormat(date: string): string {
  const currentDate: Date = new Date();
  const providedDate: Date = new Date(date);
  const timeDifference: number = currentDate.getTime() - providedDate.getTime();
  const secondsDifference: number = Math.floor(timeDifference / 1000);
  const minutesDifference: number = Math.floor(secondsDifference / 60);
  const hoursDifference: number = Math.floor(minutesDifference / 60);
  const daysDifference: number = Math.floor(hoursDifference / 24);

  if (secondsDifference < 60) {
    return 'только что';
  }

  if (minutesDifference < 60) {
    return `${minutesDifference} ${getPluralForm(minutesDifference, 'минуту', 'минуты', 'минут')} назад`;
  }

  if (hoursDifference < 24) {
    return `${hoursDifference} ${getPluralForm(hoursDifference, 'час', 'часа', 'часов')} назад`;
  }

  return `${daysDifference} ${getPluralForm(daysDifference, 'день', 'дня', 'дней')} назад`;
}

export default dateTimeFormat;
