import axios from "axios";

/**
 * Get the most popular office characters
 * @param {number} limit number of characters to return, if zero all characters are returned
 * @returns {array} list of popular characters
 */
const GetPopularCharacters = (limit = 0) =>
  axios
    .get("../data/character.json")
    .then(({ data }) => data)
    .then(characters => (limit ? characters.slice(0, limit) : characters));

export { GetPopularCharacters };
