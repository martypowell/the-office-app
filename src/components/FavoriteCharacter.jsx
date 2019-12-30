import React from "react";
import PropTypes from "prop-types";
import useCharacters from "../hooks/useCharacters";
import CharacterCards from "./CharacterCards";
import CharacterCard from "./CharacterCard";

const FavoriteCharacter = props => {
  const { isLoading, characters } = useCharacters();

  return (
    <div className="section popular-characters">
      <h2>Most Popular Characters</h2>
      <CharacterCards
        isLoading={isLoading}
        characters={characters}
        renderItem={character => {
          const handleClick = () => {
            alert(`My favorite character is ${character.name}.`);
          };
          return (
            <React.Fragment>
              <CharacterCard key={character.name} {...character} />
              <button
                type="button"
                style={{ background: "teal", color: "white" }}
                onClick={handleClick}
              >
                My Fave
              </button>
            </React.Fragment>
          );
        }}
      />
    </div>
  );
};

FavoriteCharacter.propTypes = {};

export default FavoriteCharacter;
