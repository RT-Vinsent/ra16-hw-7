/**
 * Интерфейс объекта AggregationProps, описывающий структуру данных агрегации.
 * @interface AggregationProps
 * @property {string} [date] - Дата в формате строки (необязательное поле).
 * @property {string} [month] - Месяц в формате строки (необязательное поле).
 * @property {number} [year] - Год в формате числа (необязательное поле).
 * @property {number} amount - Сумма в формате числа (обязательное поле).
 */
 export interface AggregationProps {
  date?: string;
  month?: string;
  year?: number;
  amount: number;
}

/**
 * Интерфейс объекта ProcessDataProps, описывающий структуру данных для обработки.
 * @interface ProcessDataProps
 * @property {AggregationProps[]} list - Список объектов типа AggregationProps.
 * @property {number} [year] - Год в формате числа (необязательное поле).
 */
export interface ProcessDataProps {
  list: AggregationProps[];
  year?: number;
}
