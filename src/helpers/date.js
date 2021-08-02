import { isString } from "./string";

export const monthsFull = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const monthsShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const prepareDate = (date) => {
  if (isString(date)) return new Date(date);
  else return date;
};
export const getMonth = (date, short = false) => {
  if (date) {
    const dateObj = prepareDate(date);
    return short
      ? monthsShort[dateObj.getMonth()]
      : monthsFull[dateObj.getMonth()];
  }
};

export const getYear = (date) => {
  if (date) {
    const dateObj = prepareDate(date);
    return dateObj.getFullYear();
  }
};

export const getTime = (date) => {
  if (date) {
    const dateObj = prepareDate(date);
    const hours = dateObj.getHours().toString().padStart(2, "0");
    const minutes = dateObj.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }
};
