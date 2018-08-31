import reducer from '../src/reducer';


describe('reducer', () => {
  it('should handle START action', () => {
    const state = reducer({ duration: 60 }, { type: 'START' });
    expect(state.duration).toBe(60);
    expect(state.remaining).toBe(60);
    expect(state.running).toBe(true);
    expect(state.paused).toBe(false);
    expect(typeof state.start).toBe('number');
  });

  it('should handle PAUSE action', () => {
    const state = reducer({
      running: true,
      paused: false,
      duration: 30,
      start: Date.now() - 10 * 1000, // 10 seconds ago
    }, { type: 'PAUSE' });
    expect(state.duration).toBe(20);
    expect(state.running).toBe(true);
    expect(state.paused).toBe(true);
    expect(typeof state.start).toBe('number');
  });

  it('should handle STOP action', () => {
    const state = reducer({
      running: true,
      paused: true,
      duration: 30,
      start: Date.now() - 10 * 1000, // 10 seconds ago
    }, { type: 'STOP' });
    expect(state.duration).toBe(0);
    expect(state.running).toBe(false);
    expect(state.paused).toBe(false);
    expect(state.start).toBe(null);
  });

  it('should handle TICK action', () => {
    const state = reducer({
      running: true,
      paused: false,
      duration: 30,
      start: Date.now() - 10 * 1000, // 10 seconds ago
    }, { type: 'TICK' });
    expect(state.duration).toBe(30);
    expect(state.running).toBe(true);
    expect(state.paused).toBe(false);
    expect(typeof state.start).toBe('number');
    expect(state.remaining).toBe(20);
  });

  it('should handle SET_DURATION action', () => {
    const state = reducer({ duration: 0 }, { type: 'SET_DURATION', payload: 10 });
    expect(state.duration).toBe(10);
  });

  it('should handle SET_WIDTH action', () => {
    const state = reducer({}, { type: 'SET_WIDTH', payload: 500 });
    expect(state.width).toBe(500);
  });
});
