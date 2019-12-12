import React from "react";
import "./App.scss";
import CharacterCard from "./components/CharacterCard";

const characters = [
  {
    name: "Michael Scott",
    title: "Regional Manager",
    description:
      "I miss the feeling of knowing you did a good job because someone gives you proof of it. 'Sir, you're awesome, let me give you a plaque! What? A whole year has gone by? You need more proof? Here is a certificate.' They stopped making plaques that year.",
    giphy:
      '<iframe src="https://giphy.com/embed/GQ9InpECkHgJO" width="480" height="278" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/romy-the-office-michael-scott-youre-worst-GQ9InpECkHgJO">via GIPHY</a></p>',
    image: "//gettoitmovement.com/wp-content/uploads/2017/03/michael-scott.jpg"
  },
  {
    name: "Dwight Schrute",
    title: "Assistant to the Regional Manager",
    description:
      "I miss the feeling of knowing you did a good job because someone gives you proof of it. 'Sir, you're awesome, let me give you a plaque! What? A whole year has gone by? You need more proof? Here is a certificate.' They stopped making plaques that year.",
    giphy:
      '<iframe src="https://giphy.com/embed/122pLlowwMS5aM" width="480" height="271" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/weird-the-office-unicorn-122pLlowwMS5aM">via GIPHY</a></p>',
    image:
      "http://4.bp.blogspot.com/_JYa-JfKLxvg/SNLMWbyOtnI/AAAAAAAAAsU/WKLWyQbw3t0/s320/Schrute3.jpg"
  },
  {
    name: "Jim Halpert",
    title: "Number 2",
    description:
      "I miss the feeling of knowing you did a good job because someone gives you proof of it. 'Sir, you're awesome, let me give you a plaque! What? A whole year has gone by? You need more proof? Here is a certificate.' They stopped making plaques that year.",
    giphy:
      '<iframe src="https://giphy.com/embed/qTEwof5AZerwQ" width="480" height="304" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-office-prank-john-krasinski-qTEwof5AZerwQ">via GIPHY</a></p>',
    image:
      "https://img.buzzfeed.com/buzzfeed-static/static/2017-08/9/11/asset/buzzfeed-prod-fastlane-01/sub-buzz-22381-1502291405-3.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto&output-quality=auto&output-format=auto&downsize=360:*"
  }
];

function App() {
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
