import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from './Home'
import Form from './Form'

const App = () => {
  return (
    <>
      <div className="App">
        <nav>
          <h1>Lambda Eats</h1>
          <div>
            <Link to="/">Home</Link>
            <Link to="/pizza">Order</Link>
          </div>
        </nav>
        <Switch>
          <Route path = "/pizza"><Form/></Route>
          <Route path = "/"><Home/></Route>
        </Switch>
      </div>
    </>
  );
};
export default App;
