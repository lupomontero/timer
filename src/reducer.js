export default (state, action) => {
  switch (action.type) {
    case 'START':
      return {
        ...state,
        running: true,
        paused: false,
        lastTick: Date.now(),
      };
    case 'PAUSE':
      return {
        ...state,
        paused: true,
      };
    case 'STOP':
      return {
        ...state,
        running: false,
        paused: false,
        duration: 0,
        remaining: 0,
        lastTick: null,
      };
    case 'TICK':
      return {
        ...state,
        remaining: Math.max(
          state.remaining - (Date.now() - state.lastTick),
          0,
        ),
        lastTick: Date.now(),
      };
    case 'SET_DURATION':
      return {
        ...state,
        duration: action.payload,
        remaining: action.payload * 1000,
      };
    case 'SET_WIDTH':
      return { ...state, width: action.payload };
    default:
      return state;
  }
};
