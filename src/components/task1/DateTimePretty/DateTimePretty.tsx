import dateTimeFormat from '../module/dateTimeFormat';
import DateTime from '../DateTime/DateTime';
import withPrettyDate from '../hoc/withPrettyDate';
import { ComponentType } from 'react';

/**
 * Компонент DateTimePretty с форматированной датой.
 * @returns {ComponentType<any>} - Обернутый компонент DateTime с форматированной датой.
 */
const DateTimePretty: ComponentType<any> = withPrettyDate(DateTime, dateTimeFormat);

export default DateTimePretty;
