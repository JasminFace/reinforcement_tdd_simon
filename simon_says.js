const echo = (word) => {
  return word;
};

const shout = (string) => {
  return string.toUpperCase();
};

const repeat = (word, num) => {
  return (word + ' ').repeat(num).trim();
};

module.exports = {echo: echo, shout: shout, repeat: repeat, startOfWord: startOfWord, firstWord: firstWord};
