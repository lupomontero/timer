import { createElement } from 'nano';
import { secondsToTimeStr } from '../util';


export default ({ store }) => {
  const { width, remaining } = store.getState();

  const container = createElement('div', {
    className: `clock${remaining <= 0 ? ' expired' : ''}`,
    onclick: () => store.dispatch({ type: 'PAUSE' }),
    children: [
      createElement('div', {
        innerHTML: (remaining <= 0) ? '!!!' : secondsToTimeStr(remaining),
      }),
    ],
  });

  container.setAttribute('style', `font-size: ${Math.floor(width / 5)}px;`);

  return container;
};
