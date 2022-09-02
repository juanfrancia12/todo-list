/*  OBTENER LA HORA ACTUAL */

const getTime = new Date().toLocaleTimeString("es-ES", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
});

console.log(getTime);

/* OBTENER LA FECHA ACTUAL */

const getDate = new Date().toLocaleDateString("es-ES", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
});

console.log(getDate);

/* FECHA MAS LA HORA */

export const dateTime = getDate + " " + getTime;

console.log(new Date().toLocaleString("es-ES"));
console.log(dateTime);

/*  RESTAR FECHA ACTUAL CON LA ANTERIOR */

export const differenceTwoDates = (date) => {
  const previousDate = new Date(date);
  const currentDate = new Date().toLocaleString("es-ES");

  const subtractDates =
    new Date(currentDate).getTime() - previousDate.getTime();

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  let timeDays = Math.floor(subtractDates / days);
  let timeHours = Math.floor((subtractDates % days) / hours);
  let timeMinutes = Math.floor((subtractDates % hours) / minutes);
  let timeSeconds = Math.floor((subtractDates % minutes) / seconds);

  //  COMPROBAR SI LA DIFFERENCIA DE FECHA ES POSITIVA (YA SE CUMPLIÓ) O NEGATIVA (AUN NO SE CUMPLE)

  return (timeDays, timeHours, timeMinutes, timeSeconds) > 0 ? "true" : "false";
};

export const getFullYear = (date) => {
  return new Date(date).getFullYear();
};
