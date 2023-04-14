/**
 * @param {string} line a line of the poem
 * @return {string} first letter of that line
 */
export function frontDoorResponse(line) {
  return line[0]
}

/**
 * @param {string} letters word made up of the first letters
 * @return {string} correctly capitalized word
 */
export function frontDoorPassword(letters) {
  const firstLetter = letters[0];
  const otherLetters = letters.slice(1);
  return firstLetter.toUpperCase() + otherLetters.toLowerCase()
}

/**
 * @param {string} line a line of the poem
 * @return {string} last letter of that line that is not a whitespace character
 */
export function backDoorResponse(line) {
  const lineWithoutWhitespace = line.trim();
  const index = lineWithoutWhitespace.length - 1
  return lineWithoutWhitespace[index]
}

/**
 * @param {string} letters word made up of the last letters
 * @return {string} correctly capitalized letters with ", please"
 */
export function backDoorPassword(letters) {
  const capitalizedWord = frontDoorPassword(letters);
  return capitalizedWord + ", please"
}
