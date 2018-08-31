import App from '../src/App';


describe('App', () => {
  it('should render Clock when running and not paused', () => {
    const store = { getState: () => ({ running: true, paused: false }) };
    const el = App({ store });
    expect(el.className).toBe('clock');
  });

  it('should render Settings when not running and not paused', () => {
    const store = { getState: () => ({ running: false, paused: false }) };
    const el = App({ store });
    expect(el.className).toBe('settings');
  });

  it('should render Settings when running and paused', () => {
    const store = { getState: () => ({ running: true, paused: true }) };
    const el = App({ store });
    expect(el.className).toBe('settings');
  });

  it('should render Settings when not running and paused??', () => {
    const store = { getState: () => ({ running: false, paused: true }) };
    const el = App({ store });
    expect(el.className).toBe('settings');
  });
});
