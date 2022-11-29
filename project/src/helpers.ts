import dayjs from 'dayjs';

export const dateToYYYYMMDD = (date:string) => dayjs(date).format('YYYY-MM-DD');
export const dateToMMMMYYYY = (date:string) => dayjs(date).format('MMMM YYYY');
