import { useEffect, useState } from "react";
import { GetPopularCharacters } from "../services/CharacterService";

const useCharacters = (limit = 0) => {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    GetPopularCharacters()
      .then(characters => (limit ? characters.slice(0, limit) : characters))
      .then(setCharacters)
      .then(() => setIsLoading(false));
  }, [limit]);

  return { isLoading, characters };
};

export default useCharacters;
