export default defineEventHandler(() => {
  const date = new Date();

  date.setMinutes(date.getMinutes() - 1);

  return {
    records: [
      {
        id: 337,
        profit: 5,
        date: date.getTime(),
      },
      {
        id: 3722,
        profit: 5,
        date: date.getTime(),
      },
      {
        id: 12,
        profit: 5,
        date: date.getTime(),
      },
      {
        id: 21457,
        profit: 5,
        date: date.getTime(),
      },
      {
        id: 987,
        profit: 5,
        date: date.getTime(),
      },
    ],
  };
});
