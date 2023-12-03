import './Aggregation.css';
import React from 'react';
import MonthTable from '../MonthTable/MonthTable';
import YearTable from '../YearTable/YearTable';
import SortTable from '../SortTable/SortTable';
import WithDataProcessing from '../hoc/WithDataProcessing';
import { sortDataByAmount, formatYearData, formatMonthData } from '../module/formatData';

const MonthTableWrapper = WithDataProcessing(MonthTable, (props) => formatMonthData(props.list, 2018));
const YearTableWrapper = WithDataProcessing(YearTable, formatYearData);
const SortTableWrapper = WithDataProcessing(SortTable, sortDataByAmount);

// const MonthTableWrapperSortTableWrapper = WithDataProcessing(MonthTableWrapper, sortDataByAmount);

/**
 * Основной компонент
 * @extends React.Component
 *  TODO:
 * 1. Загрузите данные с помощью fetch: https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json
 * 2. Не забудьте вынести URL в переменные окружения (не хардкодьте их здесь)
 * 3. Положите их в state
 */
export default class Aggregation extends React.Component {
  state = {
    list: []
  };

  componentDidMount() {
    this.fetchData(); // Вызов метода для загрузки данных после монтирования компонента
  }

  /**
   * Метод для загрузки данных с сервера
   */
  fetchData() {
    const aggregationUrl = process.env.REACT_APP_AGGREGATION_URL || '';

    fetch(aggregationUrl)
      .then(response => response.json())
      .then(data => {
        this.setState(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    const { list } = this.state;

    return (
      <div className='container'>
        <h2>«Агрегация данных для таблиц»</h2>
        <div className="wrapper-content">
          {/* Передача данных в компоненты таблиц */}
          
          <MonthTableWrapper list={list}/>
          <YearTableWrapper list={list}/>
          <SortTableWrapper list={list}/>
          {/* <MonthTableWrapperSortTableWrapper list={list}/> */}
          {/* <MonthTable list={list} /> */}
          {/* <YearTable list={list} /> */}
          {/* <SortTable list={list} /> */}
        </div>
      </div>
    );
  }
}
