import { createElement } from 'nano';


export default ({ store, duration, paused }) => createElement('div', {
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
      disabled: !duration,
      onclick: () => store.dispatch({ type: 'START' }),
    }),
  ],
});
