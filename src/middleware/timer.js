import NoSleep from 'nosleep.js';

export default (store) => {
  const { running, paused } = store.getState();
  const noSleep = new NoSleep();
  let interval;

  const clearInterval = () => {
    if (interval) {
      window.clearInterval(interval);
    }
    noSleep.disable();
  };

  const setInterval = () => {
    clearInterval(interval);
    interval = window.setInterval(() => {
      if (store.getState().remaining) {
        store.dispatch({ type: 'TICK' });
      } else {
        clearInterval(interval);
      }
    }, 500);
    noSleep.enable();
  };

  if (running && !paused) {
    setInterval();
  }

  return dispatch => (action) => {
    if (action.type === 'START') {
      setInterval();
    } else if (action.type === 'PAUSE' || action.type === 'STOP') {
      clearInterval();
    }

    return dispatch(action);
  };
};
