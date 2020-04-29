import { createElement } from 'nano';
import { secondsToTimeStr } from '../util';


export default ({ store }) => {
  const { width, duration, remaining } = store.getState();
  const percent = Math.floor(((remaining / 1000) / duration) * 100);
  const className = (
    percent <= 0
      ? ' expired'
      : percent <= 10
        ? ' warn'
        : percent <= 50
          ? ' half'
          : ''
  );

  const el = createElement('div', {
    className: `clock${className}`,
    onclick: () => store.dispatch({ type: 'PAUSE' }),
    children: [
      createElement('div', {
        innerHTML: (remaining <= 0) ? '!!!' : secondsToTimeStr(remaining / 1000),
      }),
      createElement('div', {
        className: `progress${className}`,
        style: { width: `${percent}%` },
      }),
    ],
  });

  el.setAttribute(
    'style',
    `font-size: ${Math.floor(width / (((remaining / 1000) >= 3600) ? 5 : 3.2))}px;`,
  );

  return el;
};
