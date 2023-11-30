/**
 * Компонент для новых элементов.
 * @param {NewProps} props - Свойства компонента New.
 * @returns {JSX.Element} - Возвращает JSX элемент.
 */
 function New(props: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      {props.children}
    </div>
  );
}

export default New;
