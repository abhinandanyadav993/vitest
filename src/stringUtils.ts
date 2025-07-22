export function capitalize(word: string) {
  if (!word) return '';
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function reverse(word: string) {
  return word.split('').reverse().join('');
}
