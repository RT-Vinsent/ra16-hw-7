/**
 * Функция для выбора правильной формы слова в зависимости от числа.
 * @param {number} number - Число, для которого нужно определить форму слова.
 * @param {string} one - Форма слова для единственного числа.
 * @param {string} few - Форма слова для нескольких (2-4) чисел.
 * @param {string} many - Форма слова для множества чисел или специфических случаев.
 * @returns {string} - Возвращает правильную форму слова в соответствии с числом.
 */
function getPluralForm(number: number, one: string, few: string, many: string): string {
  const lastDigit: number = number % 10;
  const lastTwoDigits: number = number % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return many;
  }

  if (lastDigit === 1) {
    return one;
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    return few;
  } else {
    return many;
  }
}

export default getPluralForm;
