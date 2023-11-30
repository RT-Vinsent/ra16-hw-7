/**
 * Компонент для популярных элементов.
 * @param {object} props - Свойства компонента Popular.
 * @returns {JSX.Element} - Возвращает JSX элемент.
 */
 function Popular(props: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="wrap-item wrap-item-popular">
      <span className="label">Popular!</span>
      {props.children}
    </div>
  );
}

export default Popular;
