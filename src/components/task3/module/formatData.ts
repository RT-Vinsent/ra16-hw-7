import { AggregationProps, ProcessDataProps } from "../data/AggregationProps";

/**
 * Форматирование данных по месяцам для указанного года.
 * @param {AggregationProps[]} list - Список объектов с данными.
 * @param {number} year - Год, для которого нужно отформатировать данные.
 * @returns {AggregationProps[]} - Отформатированный список объектов по месяцам для указанного года.
 */
export const formatMonthData = (list: AggregationProps[], year: number): AggregationProps[] => {
  const transformedList: { [month: number]: number } = {};

  list.forEach((item) => {
    if (!item.date) return;
    const date = new Date(item.date);
    const itemYear = date.getFullYear();

    if (itemYear === year) {
      const month = date.getMonth();

      if (!transformedList[month]) {
        transformedList[month] = 0;
      }

      transformedList[month] += item.amount;
    }
  });

  const sortedMonths = Object.keys(transformedList)
    .sort((a, b) => Number(a) - Number(b))
    .map((month) => ({
      month: new Date(`${year}-${Number(month) + 1}-01`).toLocaleString('default', { month: 'long' }),
      amount: transformedList[Number(month)],
    }));

  return sortedMonths;
};

/**
 * Форматирование данных по годам для компонента YearTable.
 * @param {ProcessDataProps} props - Объект свойств с данными.
 * @returns {AggregationProps[]} - Отформатированный список объектов с данными по годам.
 */
export const formatYearData = (props: ProcessDataProps): AggregationProps[] => {
  const { list } = props;
  const transformedList: { [year: number]: number } = {};

  list.forEach((item) => {
    if (!item.date) return;

    const year = new Date(item.date).getFullYear();
    if (!transformedList[year]) {
      transformedList[year] = 0;
    }

    transformedList[year] += item.amount;
  });

  return Object.keys(transformedList).map((year) => ({
    year: parseInt(year),
    amount: transformedList[parseInt(year)],
  })) as AggregationProps[];
};

/**
 * Сортировка данных по убыванию для компонента SortTable.
 * @param {ProcessDataProps} props - Объект свойств с данными.
 * @returns {AggregationProps[]} - Отсортированный список объектов с данными по убыванию.
 */
export const sortDataByAmount = (props: ProcessDataProps): AggregationProps[] => {
  const { list } = props;
  return [...list].sort((a, b) => b.amount - a.amount);
};
