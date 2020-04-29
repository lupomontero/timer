import { createStore, applyMiddleware } from 'nano/src/store';
import reducer from './reducer';
import timer from './middleware/timer';


const cache = localStorage.getItem('__state__');
const initialState = (
  (cache)
    ? JSON.parse(cache)
    : {
      running: false,
      paused: false,
      duration: 0,
      start: null,
      remaining: 0,
      lastTick: null,
      width: window.innerWidth,
    }
);


const store = createStore(reducer, initialState, applyMiddleware(timer));


store.subscribe(() => {
  localStorage.setItem('__state__', JSON.stringify(store.getState()));
});


window.addEventListener('resize', (e) => {
  store.dispatch({ type: 'SET_WIDTH', payload: e.target.innerWidth });
});


export const withStore = Component => props => Component({ ...props, store });


export default store;
