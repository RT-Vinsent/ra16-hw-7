import './List.css';
import React from 'react';
import withWrapper from '../hoc/withWrapper';
import New from '../New/New';
import Popular from '../Popular/Popular';
import Article from '../Article/Article';
import Video from '../Video/Video';
import { ArticleAndVideoProps } from '../data/ArticleAndVideoProps';

/**
 * Интерфейс свойства списка.
 * @typedef {object} ListProps
 * @property {ItemType[]} list - Массив элементов списка.
 */
interface ListProps {
  list: ArticleAndVideoProps[];
};

/**
 * Компонент списка элементов.
 * @param {ListProps} props - Свойства компонента List.
 * @returns {JSX.Element[]} - Возвращает массив JSX элементов.
 */
function List(props: ListProps): JSX.Element {
  return (
    <div className='container'>
      <h2>«Форматирование даты публикации»</h2>
      <div className="wrapper-content">
        {props.list.map((item, index) => {
          switch (item.type) {
            case 'video':
              // return (<Video key={index} {...item} />);
              const VideoBlockWithWrapper = item.views > 1000 ? withWrapper(Video, Popular) : item.views < 100 ? withWrapper(Video, New) : Video;
              return <VideoBlockWithWrapper key={index} {...item} title={index.toString()}/>;

            case 'article':
              // return (<Article key={index} {...item} /> );
              const ArticleWithWrapper = item.views > 1000 ? withWrapper(Article, Popular) : item.views < 100 ? withWrapper(Article, New) : Article;
              return <ArticleWithWrapper key={index} {...item} />;

            default:
              return <React.Fragment key={index} />;
          }
        })}
      </div>
    </div>
  );
}

export default List;
