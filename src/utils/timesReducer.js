// Initialize available times
export function initializeTimes() {
  const today = new Date();
  if (window.fetchAPI && typeof window.fetchAPI === 'function') {
    return window.fetchAPI(today);
  }
  return ['17:00', '18:00', '19:00', '20:00', '21:00'];
}

// Update available times based on selected date
export function updateTimes(state, action) {
  if (action.type === 'UPDATE_TIMES') {
    if (window.fetchAPI && typeof window.fetchAPI === 'function' && action.date) {
      const dateObj = new Date(action.date);
      return window.fetchAPI(dateObj);
    }
    return state;
  }
  return state;
}

