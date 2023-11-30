import React, { ComponentType } from 'react';

/**
 * HOC, который форматирует дату с использованием указанной функции форматирования.
 * @param {ComponentType<any>} Component - Компонент, который требуется обернуть.
 * @param {Function} formatFunction - Функция для форматирования даты.
 * @returns {ComponentType<any>} - Обернутый компонент с форматированной датой.
 */
const withPrettyDate = (
  Component: ComponentType<any>,
  formatFunction: (date: string) => string
): ComponentType<any> => {
  return (props: any) => {
    const date = formatFunction(props.date);
    return <Component {...props} date={date} />;
  };
};

export default withPrettyDate;
