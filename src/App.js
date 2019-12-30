import React from "react";
import "./App.scss";
import CharacterCard from "./components/CharacterCard";
import useCharacters from "./hooks/useCharacters";

function App() {
  const { isLoading, characters } = useCharacters();

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Favorite Office Character</h1>
      </header>
      <div className="section popular-characters">
        <h2>Most Popular Characters</h2>
        {isLoading ? (
          <p>Loading Everyone's Favorite Characters...</p>
        ) : (
          <div className="cards">
            {characters.map(character => (
              <CharacterCard key={character.name} {...character} />
            ))}
          </div>
        )}
      </div>
      <div className="">
        <a href="/vote" className="btn btn-primary">
          Vote Now
        </a>
      </div>
    </div>
  );
}

export default App;
