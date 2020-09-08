import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Products from "./pages/Products/Products";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Header history={history} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/items" component={Products} />
      </Switch>
    </Router>
  );
}

export default App;
