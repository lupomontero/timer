import { render } from 'nano';
import store, { withStore } from './store';
import App from './App';

const doRender = () => render(withStore(App), document.getElementById('root'));

store.subscribe(doRender);
doRender();


// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/sw.js')
//       // .then((registration) => {
//       //   // console.log('ServiceWorker registration successful with scope: ', registration);
//       // })
//       .catch((err) => {
//         alert('Your browser does not support service workers for offline capabilities.');
//         console.log('ServiceWorker registration failed: ', err);
//       });
//   });
// }
