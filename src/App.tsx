import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Products from "./pages/Products/Products";
import ProductSingle from "./pages/Products/ProductSingle";
import { Provider } from "react-redux";
import store from "./redux/store";
import history from "./history";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/items" component={Products} />
          <Route exact path="/items/:id" component={ProductSingle} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
