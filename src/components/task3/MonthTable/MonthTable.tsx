import { AggregationProps } from "../data/AggregationProps";

/**
 * Компонент таблицы по месяцам.
 * @param {Object} props - Свойства компонента.
 * @param {AggregationProps[]} props.list - Список объектов с данными по месяцам.
 * @returns {JSX.Element} - Элемент таблицы.
 */
function MonthTable({ list }: { list: AggregationProps[] }): JSX.Element {
  return (
    <div className='table-wrap'>
      <h2>Таблица по месяцам</h2>
      <table>
        <thead>
          <tr>
            <th>Месяц</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <td>{item.month}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MonthTable;
