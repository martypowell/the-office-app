import React from "react";
import useCharacters from "../hooks/useCharacters";
import CharacterCards from "./CharacterCards";

const Home = props => {
  const { isLoading, characters } = useCharacters(3);
  return (
    <React.Fragment>
      <div className="section popular-characters">
        <h2>Most Popular Characters</h2>
        <CharacterCards isLoading={isLoading} characters={characters} />
      </div>
      <div className="">
        <a href="/vote" className="btn btn-primary">
          Vote Now
        </a>
      </div>
    </React.Fragment>
  );
};

export default Home;
