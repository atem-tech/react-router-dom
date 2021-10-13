import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Movie from "./Components/Movie";
import Nav from "./Components/Nav/Nav";
import About from "./Pages/About";

import Home from "./Pages/Home";
import { useState, useEffect } from "react";

function App() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_KEY}&t=Godfather`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, []);
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Movie">
            <Movie movie={movie} />
          </Route>
          <Route path="/">
            <h1>Error</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
