import React from "react";
import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";

const CharacterCards = ({
  isLoading,
  characters,
  renderItem = character => (
    <CharacterCard key={character.name} {...character} />
  )
}) => {
  return isLoading ? (
    <p>Loading Everyone's Favorite Characters...</p>
  ) : (
    <div className="cards">{characters.map(renderItem)}</div>
  );
};

CharacterCards.propTypes = {
  isLoading: PropTypes.bool,
  characters: PropTypes.array
};

export default CharacterCards;
