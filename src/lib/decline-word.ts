export const declineWord = (count: number, words: string[]) => {
  if (count % 10 === 1) {
    return words[0];
  }
  if (count % 10 >= 2 && count % 10 <= 4) {
    return words[1];
  }
  return words[2];
};
