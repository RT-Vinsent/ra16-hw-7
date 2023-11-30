import { ArticleAndVideoProps } from '../data/ArticleAndVideoProps';

/**
 * Компонент видео
 * @param {{ url: string; date: string }} props - Свойства компонента
 * @returns {JSX.Element} - Элемент видео
 */
function Video(props: ArticleAndVideoProps): JSX.Element {
  return (
    <div className="item item-video">
      <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="video"></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  );
}

export default Video;
