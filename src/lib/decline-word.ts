export const declineWord = (word: string, count: number) => {
  if (count % 10 === 1) {
    return word.substring(word.length - 3, word.length - 1) + 'е';
  }
  if (count % 10 >= 2 && count % 10 <= 4) {
    return word.substring(word.length - 3, word.length - 1) + 'я';
  }

  return word.substring(word.length - 2, word.length - 1) + 'й';
};
