import { initializeTimes, updateTimes } from '../../utils/timesReducer';

describe('initializeTimes', () => {
  let mockFetchAPI;

  beforeEach(() => {
    // Set up fetchAPI mock before each test
    mockFetchAPI = jest.fn((date) => {
      return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    });
    window.fetchAPI = mockFetchAPI;
  });

  afterEach(() => {
    // Clean up after each test
    delete window.fetchAPI;
  });

  test('returns the correct expected value from fetchAPI', () => {
    const result = initializeTimes();
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    expect(result).toEqual(expectedTimes);
    expect(mockFetchAPI).toHaveBeenCalledTimes(1);
    expect(mockFetchAPI).toHaveBeenCalledWith(expect.any(Date));
  });

  test('returns an array of strings', () => {
    const result = initializeTimes();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result.every(time => typeof time === 'string')).toBe(true);
  });
});

describe('updateTimes', () => {
  let mockFetchAPI;

  beforeEach(() => {
    // Set up fetchAPI mock before each test
    mockFetchAPI = jest.fn((date) => {
      return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    });
    window.fetchAPI = mockFetchAPI;
  });

  afterEach(() => {
    // Clean up after each test
    delete window.fetchAPI;
  });

  test('returns the value from fetchAPI when date is provided', () => {
    const state = ['17:00', '18:00', '19:00', '20:00', '21:00'];
    const action = { type: 'UPDATE_TIMES', date: '2024-01-15' };
    
    const result = updateTimes(state, action);
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    
    expect(result).toEqual(expectedTimes);
    expect(mockFetchAPI).toHaveBeenCalledTimes(1);
    expect(mockFetchAPI).toHaveBeenCalledWith(expect.any(Date));
  });

  test('handles UPDATE_TIMES action type with date', () => {
    const state = ['17:00', '18:00', '19:00'];
    const action = { type: 'UPDATE_TIMES', date: '2024-01-15' };
    
    const result = updateTimes(state, action);
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    
    expect(result).toEqual(expectedTimes);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });

  test('returns state for unknown action types', () => {
    const state = ['17:00', '18:00', '19:00'];
    const action = { type: 'UNKNOWN_ACTION' };
    
    const result = updateTimes(state, action);
    
    expect(result).toBe(state);
    expect(mockFetchAPI).not.toHaveBeenCalled();
  });
});

