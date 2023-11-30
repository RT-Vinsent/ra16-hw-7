/**
 * Компонент отображения даты и времени
 * @param {{ date: string }} props - Свойства компонента
 * @returns {JSX.Element} - Элемент с датой и временем
 */
 function DateTime({ date }: { date: string }): JSX.Element {
  return (
    <p className="date">{date}</p>
  );
}

export default DateTime;
