const echo = (word) => {
  return word;
};

const shout = (string) => {
  return string.toUpperCase();
};

const repeat = (word, num) => {
  return (word + ' ').repeat(num).trim();
};

const startOfWord = (word, num) => {
  return word.substring(0, num);
};

const firstWord = (string) => {
  return string.split(' ')[0];
};

module.exports = {echo: echo, shout: shout, repeat: repeat, startOfWord: startOfWord, firstWord: firstWord};
