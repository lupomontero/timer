export default (state, action) => {
  switch (action.type) {
    case 'START':
      return {
        ...state,
        running: true,
        paused: false,
        start: Date.now(),
        remaining: state.duration,
      };
    case 'PAUSE':
      return {
        ...state,
        paused: true,
        duration: Math.max(
          state.duration - Math.floor((Date.now() - state.start) / 1000),
          0,
        ),
      };
    case 'STOP':
      return {
        ...state,
        running: false,
        paused: false,
        duration: 0,
        start: null,
      };
    case 'TICK':
      return {
        ...state,
        remaining: Math.max(
          state.duration - Math.floor((Date.now() - state.start) / 1000),
          0,
        ),
      };
    case 'SET_DURATION':
      return {
        ...state,
        duration: Math.max(Math.floor(action.payload), 0),
      };
    case 'SET_WIDTH':
      return { ...state, width: action.payload };
    default:
      return state;
  }
};
