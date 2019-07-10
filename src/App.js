import React from "react";
import Nav from "./Nav";
import Shop from "./Shop";
import About from "./About";
import Detail from "./ItemDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={Detail} />
        </div>
      </Switch>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);
export default App;
