export const dateConverter = (inputDate: string): string => {
  const currentDate = new Date();
  const date = new Date(inputDate);

  // Handle same day
  if (
    date.getDate() === currentDate.getDate() &&
    date.getFullYear() === currentDate.getFullYear()
  ) {
    return `${date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`}:${
      date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`
    }`;
  }

  // Handle same year
  if (date.getFullYear() === currentDate.getFullYear()) {
    return `${date.getDate()}.${
      date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
    }`;
  }

  return `${date.getDate()}.${
    date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
  }.${date.getFullYear()}`;
};
