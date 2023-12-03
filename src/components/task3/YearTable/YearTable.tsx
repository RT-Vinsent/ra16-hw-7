import { AggregationProps } from "../data/AggregationProps";

/**
 * Компонент таблицы по годам.
 * @param {Object} props - Свойства компонента.
 * @param {AggregationProps[]} props.list - Список объектов с данными по годам.
 * @returns {JSX.Element} - Элемент таблицы.
 */
function YearTable({ list }: { list: AggregationProps[] }): JSX.Element {
  return (
    <div className='table-wrap'>
      <h2>Таблица по годам</h2>
      <table>
        <thead>
          <tr>
            <th>Год</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <td>{item.year}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default YearTable;
