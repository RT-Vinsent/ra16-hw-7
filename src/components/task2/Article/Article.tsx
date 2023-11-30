/* eslint-disable jsx-a11y/anchor-is-valid */
import { ArticleAndVideoProps } from '../data/ArticleAndVideoProps';

/**
 * Компонент для статьи.
 * @param {ArticleProps} props - Свойства компонента Article.
 * @returns {JSX.Element} - Возвращает JSX элемент.
 */
function Article(props: ArticleAndVideoProps): JSX.Element {
  return (
    <div className="item item-article">
      <h3><a href="#">{props.title}</a></h3>
      <p className="views">Прочтений: {props.views}</p>
    </div>
  );
}

export default Article;
