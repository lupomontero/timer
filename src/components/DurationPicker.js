import { createElement } from 'nano';
import { pad, secondsToTimeObj } from '../util';


const Select = ({ name, value, onChange }) => {
  const options = [];

  for (let i = 0; i < 60; i += 1) {
    options.push(createElement('option', {
      value: i,
      innerHTML: pad(i),
    }));
  }

  const select = createElement('select', {
    id: name,
    name,
    value,
    children: options,
    onchange: onChange,
  });

  select.value = value;

  return select;
};


const SelectGroup = ({ name, value, onChange }) => {
  const label = createElement('label', {
    innerHTML: `${name.slice(0, 1)}${name.slice(0, 1)}`,
  });

  label.setAttribute('for', name);

  return createElement('div', {
    children: [
      label,
      Select({ name, value, onChange }),
    ],
  });
};


export default ({ remaining, onChange }) => {
  const { hours, minutes, seconds } = secondsToTimeObj(remaining / 1000);

  return createElement('div', {
    className: 'duration-picker',
    children: [
      SelectGroup({ name: 'hours', value: hours, onChange }),
      createElement('span', { innerHTML: ':' }),
      SelectGroup({ name: 'minutes', value: minutes, onChange }),
      createElement('span', { innerHTML: ':' }),
      SelectGroup({ name: 'seconds', value: seconds, onChange }),
    ],
  });
};
