const twoDigitDate = (value) => {
  return value < 10 ? "0" + value : value;
};

export const getDate = () => {
  const date = new Date();
  const day = twoDigitDate(date.getDate());
  const month = twoDigitDate(date.getMonth() + 1);
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const getTime = () =>
  new Date().toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

export const getFullYear = (date) => {
  return new Date(date).getFullYear();
};

export const subtractDates = function (date) {
  var aDate = date.split("-");
  var aGetDate = getDate().split("-");
  var formantDate = Date.UTC(aDate[2], aDate[1] - 1, aDate[0]);
  var formantGetDate = Date.UTC(aGetDate[2], aGetDate[1] - 1, aGetDate[0]);
  var difference = formantGetDate - formantDate;
  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  return days;
};
