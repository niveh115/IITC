/**
 * Save data to local storage
 * @param {string} key - The storage key
 * @param {*} value - The value to store
 */
export function saveToStorage(key, value) {
  // Local storage can only store strings
  // We need to convert the value to a string (JSON.stringify)
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Load data from local storage
 * @param {string} key - The storage key
 * @returns {*} - The loaded data. If the data is not found, return null
 */
export function loadFromStorage(key) {
  // Local storage can only store strings
  // We need to convert the string to an object (JSON.parse)
  const data = localStorage.getItem(key);

  // If the data is not found, return null
  // If the data is found, convert it to an object (JSON.parse)
  return data ? JSON.parse(data) : null;
}
