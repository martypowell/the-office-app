import React from "react";
import PropTypes from "prop-types";

const CharacterCard = ({ name, title, description, giphy, image }) => (
  <div className="card card--character">
    <h3>{name}</h3>
    <p>{title}</p>
    <img
      src={image}
      height="240px"
      alt={`Professional head shot for ${name}`}
    />
  </div>
);

CharacterCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  giphy: PropTypes.string,
  image: PropTypes.string.isRequired
};

export default CharacterCard;
