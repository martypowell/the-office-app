import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CharacterCard from "./CharacterCard";

const characters = [
  {
    name: "Michael Scott",
    title: "Regional Manager",
    description:
      "I miss the feeling of knowing you did a good job because someone gives you proof of it. 'Sir, you're awesome, let me give you a plaque! What? A whole year has gone by? You need more proof? Here is a certificate.' They stopped making plaques that year.",
    giphy:
      '<iframe src="https://giphy.com/embed/GQ9InpECkHgJO" width="480" height="278" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/romy-the-office-michael-scott-youre-worst-GQ9InpECkHgJO">via GIPHY</a></p>',
    image: "//gettoitmovement.com/wp-content/uploads/2017/03/michael-scott.jpg"
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Favorite Office App</h1>
      </header>
      <div className="popular-characters">
        <h2>Most Popular Characters</h2>
        {characters.map(character => (
          <CharacterCard key={character.name} {...character} />
        ))}
      </div>
    </div>
  );
}

export default App;
