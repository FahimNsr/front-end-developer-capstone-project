// Initialize available times
export function initializeTimes() {
  return ['17:00', '18:00', '19:00', '20:00', '21:00'];
}

// Update available times based on selected date
export function updateTimes(state, action) {
  // For now, return the same available times regardless of the date
  // This will be updated in future steps to filter based on date
  if (action.type === 'UPDATE_TIMES') {
    // Currently returns the same times, but action.date is available for future use
    return state;
  }
  return state;
}

