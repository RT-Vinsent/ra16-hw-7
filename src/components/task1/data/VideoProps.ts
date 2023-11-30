/**
 * Интерфейс свойств компонента Video.
 */
export interface VideoItem {
  url: string;
  date: string;
}

/**
 * Список видео.
 * @type {VideoItem[]}
 */
export const listVideo: VideoItem[] = [
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
];
