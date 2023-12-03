import { AggregationProps, ProcessDataProps } from "../data/AggregationProps";
import React from 'react';

/**
 * Higher Order Component (HOC) для обработки данных.
 * @param {React.ComponentType<ProcessDataProps>} Component - Компонент для обработки данных.
 * @param {(props: ProcessDataProps) => AggregationProps[]} processData - Функция для обработки данных.
 * @returns {React.ComponentType<any>} - Обёрнутый компонент с обработанными данными.
 */
const WithDataProcessing = (
  Component: React.ComponentType<ProcessDataProps>,
  processData: (props: ProcessDataProps) => AggregationProps[]
): React.ComponentType<any>  => {
  return class extends React.Component<any> {
    render() {
      const processedData = processData(this.props as ProcessDataProps);
      return <Component list={processedData} />;
    }
  };
};

export default WithDataProcessing;
