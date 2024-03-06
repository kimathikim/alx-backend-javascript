#!/usr/bin/node

/**
 * Returns the task string.
 * @returns {string} The task string.
 */
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okey';
}

/**
 * Concatenates the string 'But sometimes let' with the result of the getLast() function.
 *
 * @returns {string} The concatenated string.
 */
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();
  return combination;
}
