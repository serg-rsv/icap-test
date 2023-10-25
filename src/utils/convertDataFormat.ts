export const convertDateFormat = (date: string) => {
  const parts = date.split('-');
  if (parts.length === 3 && parts[0].length === 2) {
    const [day, month, year] = parts;
    const formattedDate = `20${year}-${month}-${day}`;
    return formattedDate;
  }
  return date;
};
