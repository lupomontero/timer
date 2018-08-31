import Clock from './pages/Clock';
import Settings from './pages/Settings';


export default props => (
  (props.store.getState().running && !props.store.getState().paused)
    ? Clock(props)
    : Settings(props)
);
