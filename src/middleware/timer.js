export default (store) => {
  const { running, paused } = store.getState();
  let interval;

  const clearInterval = () => interval && window.clearInterval(interval);

  const setInterval = () => {
    clearInterval(interval);
    interval = window.setInterval(() => {
      if (store.getState().remaining) {
        store.dispatch({ type: 'TICK' });
      }
    }, 500);
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
