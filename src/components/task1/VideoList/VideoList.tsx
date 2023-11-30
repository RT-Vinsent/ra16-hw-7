import './VideoList.css';
// import React, { useState } from 'react';
import Video from '../Video/Video';

/** Описывает структуру элемента видео */
export interface VideoItem {
  url: string;
  date: string;
}

/** Свойства компонента списка видео */
interface VideoListProps {
  list: VideoItem[];
}

/**
 * Компонент списка видео
 * @param {{ list: VideoItem[] }} props - Свойства компонента
 * @returns {JSX.Element} - Элемент списка видео
 */
export function VideoList({ list }: VideoListProps): JSX.Element {
  return (
    <div className='container'>
      <h2>«Форматирование даты публикации»</h2>
      <div className="video-content">
        {list.map((item, index) => (
          <Video key={index} url={item.url} date={item.date} />
        ))}
      </div>
    </div>
  );
}
