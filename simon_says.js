const echo = (word) => {
  return word;
};

const shout = (string) => {
  return string.toUpperCase();
};

module.exports = {echo: echo, shout: shout, repeat: repeat, startOfWord: startOfWord, firstWord: firstWord};
