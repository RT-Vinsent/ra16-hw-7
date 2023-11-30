import DateTimePretty from '../DateTimePretty/DateTimePretty';
// import DateTime from '../DateTime/DateTime';

/**
 * Интерфейс свойств компонента Video.
 */
 interface VideoProps {
  url: string;
  date: string;
}

/**
 * Компонент видео
 * @param {{ url: string; date: string }} props - Свойства компонента
 * @returns {JSX.Element} - Элемент видео
 */
 function Video({ url, date }: VideoProps): JSX.Element {
  return (
    <div className="video">
      <iframe src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="video"></iframe>
      {/* <DateTime date={date} /> */}
      <DateTimePretty date={date} />
    </div>
  );
}

export default Video;
