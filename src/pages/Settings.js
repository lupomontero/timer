import { createElement } from 'nano';
import DurationPicker from '../components/DurationPicker';
import Controls from '../components/Controls';


export default ({ store }) => {
  const { duration, paused } = store.getState();
  const onChange = (e) => {
    const durationPicker = e.target.parentNode.parentNode;
    const timeObj = [...durationPicker.querySelectorAll('select')].reduce(
      (memo, el) => ({ ...memo, [el.name]: parseInt(el.value, 10) }),
      {},
    );

    store.dispatch({
      type: 'SET_DURATION',
      payload: (timeObj.hours * 60 * 60) + (timeObj.minutes * 60) + timeObj.seconds,
    });
  };

  return createElement('div', {
    className: 'settings',
    children: [
      DurationPicker({ duration, onChange }),
      Controls({ store, duration, paused }),
    ],
  });
};
