import React, { useState } from 'react';
import './App.css';
import { VideoList, VideoItem } from './components/task1/VideoList/VideoList';

/**
 * Главный компонент приложения
 * @returns {JSX.Element} - Основной элемент приложения
 */
function App(): JSX.Element {
  const [list, setList] = useState<VideoItem[]>([
    {
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-07-31 13:24:00'
    },
    {
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      // date: '2018-03-03 12:10:00'
      date: '2023-11-28 11:24:00'
    },
    {
      url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
      // date: '2018-02-03 23:16:00'
      date: '2023-11-29 11:24:00'
    },
    {
      url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
      // date: '2018-01-03 12:10:00'
      date: '2023-11-30 11:24:00'
    },
    {
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      // date: '2018-01-01 16:17:00'
      date: '2023-11-30 14:00:00'
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      // date: '2017-12-02 05:24:00'
      date: '2023-11-30 14:09:00'
    },
  ]);
  
  return (
    <>
      {/* шапка */}
      <header className='header'>
        <h1>Домашнее задание «HOC — Higher Order Components»</h1>
        <h2>Задачи расположены последовательно в столбик</h2>
      </header>
      
      {/* Компонент задачи №1 */}
      <VideoList list={list} />

      {/* Компонент задачи №2 */}
      {/* < /> */}

      {/* Компонент задачи №3 */}
      {/* < /> */}
      
      {/* Просто подвал */}
      <footer className='footer'><p>Просто подвал</p></footer>
    </>
  );
}

export default App;
