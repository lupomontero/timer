import reducer from '../src/reducer';


describe('reducer', () => {
  it('should handle START action', () => {
    const state = reducer({}, { type: 'START' });
    expect(state.running).toBe(true);
    expect(state.paused).toBe(false);
    expect(typeof state.lastTick).toBe('number');
  });

  it('should handle PAUSE action', () => {
    const state = reducer({}, { type: 'PAUSE' });
    expect(state.paused).toBe(true);
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
    expect(state.lastTick).toBe(null);
  });

  it('should handle TICK action', () => {
    const state = reducer({
      remaining: 30 * 1000,
      lastTick: Date.now() - 10 * 1000, // 10 seconds ago
    }, { type: 'TICK' });
    expect(Math.round(state.remaining / 1000)).toBe(20);
    expect(typeof state.lastTick).toBe('number');
  });

  it('should handle SET_DURATION action', () => {
    const state = reducer({ duration: 0 }, { type: 'SET_DURATION', payload: 10 });
    expect(state.duration).toBe(10);
    expect(state.remaining).toBe(10 * 1000);
  });

  it('should handle SET_WIDTH action', () => {
    const state = reducer({}, { type: 'SET_WIDTH', payload: 500 });
    expect(state.width).toBe(500);
  });
});
