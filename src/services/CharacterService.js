import axios from "axios";

function sleeper(ms) {
  return function(x) {
    return new Promise(resolve => setTimeout(() => resolve(x), ms));
  };
}

/**
 * Get the most popular office characters
 * @param {number} limit number of characters to return, if zero all characters are returned
 * @returns {array} list of popular characters
 */
const GetPopularCharacters = (limit = 0) =>
  axios
    .get("../data/character.json")
    .then(sleeper(1000))
    .then(({ data }) => data)
    .then(characters => (limit ? characters.slice(0, limit) : characters));

export { GetPopularCharacters };
