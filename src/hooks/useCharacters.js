import { useEffect, useState } from "react";
import { GetPopularCharacters } from "../services/CharacterService";

const useCharacters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    GetPopularCharacters()
      .then(setCharacters)
      .then(() => setIsLoading(false));
  }, []);

  return { isLoading, characters };
};

export default useCharacters;
