import { AggregationProps } from "../data/AggregationProps";

/**
 * Компонент таблицы с сортировкой.
 * @param {Object} props - Свойства компонента.
 * @param {AggregationProps[]} props.list - Список объектов с данными.
 * @returns {JSX.Element} - Элемент таблицы.
 */
function SortTable({ list }: { list: AggregationProps[] }): JSX.Element {
  return (
    <div className='table-wrap'>
      <h2>Таблица с сортировкой</h2>
      <table>
        <thead>
          <tr>
            <th>Дата</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SortTable;
