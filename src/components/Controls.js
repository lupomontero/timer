import { createElement } from 'nano';


export default ({ store, remaining, paused }) => createElement('div', {
  className: 'controls',
  children: [
    paused && createElement('button', {
      className: 'danger',
      innerHTML: 'Cancel',
      onclick: () => store.dispatch({ type: 'STOP' }),
    }),
    createElement('button', {
      className: 'primary',
      innerHTML: paused ? 'Continue' : 'Start',
      disabled: !remaining,
      onclick: () => store.dispatch({ type: 'START' }),
    }),
  ],
});
