export const declineWord = (word: string, count: number) => {
  console.log(word);
  if (count % 10 === 1) {
    return word.substring(0, word.length - 1) + 'е';
  }
  if (count % 10 >= 2 && count % 10 <= 4) {
    return word.substring(0, word.length - 1) + 'я';
  }

  return word.substring(0, word.length - 1) + 'й';
};
