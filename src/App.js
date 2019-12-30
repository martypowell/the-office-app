import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import FavoriteCharacter from "./components/FavoriteCharacter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Favorite Office Character</h1>
      </header>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/vote" exact component={FavoriteCharacter} />
      </Router>
    </div>
  );
}

export default App;
