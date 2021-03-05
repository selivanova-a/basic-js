const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let array = members.filter(name => typeof name === 'string');

  let letters = array.map(item => item.trim()[0].toUpperCase());

  return letters.sort().join('');
};