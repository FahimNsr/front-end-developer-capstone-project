import { initializeTimes, updateTimes } from '../../utils/timesReducer';

describe('initializeTimes', () => {
  test('returns the correct expected value', () => {
    const result = initializeTimes();
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
    expect(result).toEqual(expectedTimes);
  });

  test('returns an array of strings', () => {
    const result = initializeTimes();
    expect(Array.isArray(result)).toBe(true);
    expect(result.every(time => typeof time === 'string')).toBe(true);
  });
});

describe('updateTimes', () => {
  test('returns the same value that is provided in the state', () => {
    const state = ['17:00', '18:00', '19:00', '20:00', '21:00'];
    const action = { type: 'UPDATE_TIMES', date: '2024-01-15' };
    
    const result = updateTimes(state, action);
    
    expect(result).toEqual(state);
  });

  test('handles UPDATE_TIMES action type', () => {
    const state = ['17:00', '18:00', '19:00'];
    const action = { type: 'UPDATE_TIMES', date: '2024-01-15' };
    
    const result = updateTimes(state, action);
    
    expect(result).toBe(state);
  });

  test('returns state for unknown action types', () => {
    const state = ['17:00', '18:00', '19:00'];
    const action = { type: 'UNKNOWN_ACTION' };
    
    const result = updateTimes(state, action);
    
    expect(result).toBe(state);
  });
});

