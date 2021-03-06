export function numberFormat(num: any) {
  const numFormat = Math.floor(num);
  return numFormat.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
}

export function getTime(date: any) {
  if (!date) {
    return '';
  }
  const time = new Date(date);

  return time.toJSON().slice(0, 10).replace(/-/g, '/') !==
    new Date().toJSON().slice(0, 10).replace(/-/g, '/')
    ? time.toJSON().slice(0, 10).replace(/-/g, '/')
    : `${time.getHours()}:${time.getMinutes()}`;
}

export function formatTime(someDate: any) {
  const b: any = new Date(someDate);
  const today = new Date();
  const yesterday = new Date();
  const dayBeforeYesterday = new Date();
  const now: any = new Date();
  yesterday.setDate(today.getDate() - 1);
  dayBeforeYesterday.setDate(today.getDate() - 2);

  const Today =
    b.getTime() < today.getTime() && b.getTime() > yesterday.getTime();

  const Yesterday =
    b.getTime() < yesterday.getTime() &&
    b.getTime() > dayBeforeYesterday.getTime();
  if (Today) {
    const d = new Date(now - b);
    if (d.getHours() > 1) {
      return `${d.getHours()} hours ago`;
    }
    return `${d.getMinutes()} minutes ago`;
  }
  if (Yesterday) return 'Yesterday';
  return getTime(someDate);
}
