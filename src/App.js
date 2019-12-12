import React, { useEffect, useState } from "react";
import "./App.scss";
import CharacterCard from "./components/CharacterCard";
import { GetPopularCharacters } from "./services/CharacterService";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    GetPopularCharacters().then(setCharacters);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Favorite Office Character</h1>
      </header>
      <div className="section popular-characters">
        <h2>Most Popular Characters</h2>
        <div className="cards">
          {characters.map(character => (
            <CharacterCard key={character.name} {...character} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
