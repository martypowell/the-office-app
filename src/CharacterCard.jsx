import React from "react";
import PropTypes from "prop-types";

const CharacterCard = ({ name, title, description, giphy, image }) => (
  <div className="card card--character">
    <h3>{name}</h3>
    <img src={image} alt={`Professional head shot for ${name}`} />
    <p>{title}</p>
    <p>{description}</p>
    <div dangerouslySetInnerHTML={{ __html: giphy }}></div>
  </div>
);

CharacterCard.propTypes = {};

export default CharacterCard;
