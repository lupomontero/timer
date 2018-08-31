export const pad = num => ((num > 9) ? `${num}` : `0${num}`);


export const secondsToTimeObj = (int) => {
  const hours = Math.floor(int / (60 * 60));
  const minutes = Math.floor((int - (hours * 60 * 60)) / 60);
  return {
    seconds: int - (hours * 60 * 60) - (minutes * 60),
    minutes,
    hours,
  };
};


export const secondsToTimeStr = (int) => {
  const { hours, minutes, seconds } = secondsToTimeObj(int);
  return `${hours ? `${pad(hours)}:` : ''}${pad(minutes)}:${pad(seconds)}`;
};
