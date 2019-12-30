import React from "react";
import "./App.scss";
import CharacterCard from "./components/CharacterCard";
import useCharacters from "./hooks/useCharacters";
import CharacterCards from "./components/CharacterCards";

function App() {
  const { isLoading, characters } = useCharacters(3);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Favorite Office Character</h1>
      </header>
      <div className="section popular-characters">
        <h2>Most Popular Characters</h2>
        <CharacterCards isLoading={isLoading} characters={characters} />
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
