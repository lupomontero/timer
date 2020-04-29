export const pad = num => ((num > 9) ? `${num}` : `0${num}`);


export const secondsToTimeObj = (num) => {
  const hours = Math.floor(num / (60 * 60));
  const minutes = Math.floor((num - (hours * 60 * 60)) / 60);
  return {
    seconds: Math.floor(num - (hours * 60 * 60) - (minutes * 60)),
    minutes,
    hours,
  };
};


export const secondsToTimeStr = (num) => {
  const { hours, minutes, seconds } = secondsToTimeObj(num);
  return `${hours ? `${pad(hours)}:` : ''}${pad(minutes)}:${pad(seconds)}`;
};
