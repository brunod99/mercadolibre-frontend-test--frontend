import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Products from "./pages/Products/Products";
import ProductSingle from "./pages/Products/ProductSingle";
import { Provider } from "react-redux";
import store from "./redux/store";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Provider store={store}>
        <Header history={history} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/items" component={Products} />
          <Route exact path="/items/:id" component={ProductSingle} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
