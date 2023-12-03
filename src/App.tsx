import React, { useState } from 'react';
import './App.css';
import VideoList from './components/task1/VideoList/VideoList';
import { listVideo, VideoItem } from './components/task1/data/VideoProps';
import List from './components/task2/List/List';
import { listArticleAndVideo, ArticleAndVideoProps } from './components/task2/data/ArticleAndVideoProps';
import AggregationProps from './components/task3/Aggregation/Aggregation';

/**
 * Главный компонент приложения
 * @returns {JSX.Element} - Основной элемент приложения
 */
function App(): JSX.Element {
  const [list] = useState<VideoItem[]>(listVideo);
  const [list2] = useState<ArticleAndVideoProps[]>(listArticleAndVideo);
  
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
      <List list={list2} />

      {/* Компонент задачи №3 */}
      <AggregationProps />
      
      {/* Просто подвал */}
      <footer className='footer'><p>Просто подвал</p></footer>
    </>
  );
}

export default App;
