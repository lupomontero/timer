import { createElement } from 'nano';
import { secondsToTimeStr } from '../util';


export default ({ store }) => {
  const { width, remaining } = store.getState();

  const el = createElement('div', {
    className: `clock${remaining <= 0 ? ' expired' : ''}`,
    onclick: () => store.dispatch({ type: 'PAUSE' }),
    children: [
      createElement('div', {
        innerHTML: (remaining <= 0) ? '!!!' : secondsToTimeStr(remaining),
      }),
    ],
  });

  el.setAttribute(
    'style',
    `font-size: ${Math.floor(width / ((remaining >= 3600) ? 5 : 3.2))}px;`,
  );

  return el;
};
