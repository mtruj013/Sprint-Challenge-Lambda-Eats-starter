import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import Home from './Home'
import Form from './Form'

const App = () => {
  return (
    <>
      <div className="App">
        <h1>Lambda Eats</h1>
        <BrowserRouter>
          <Route exact path ="/" component={Home}/>
        </BrowserRouter>
        <Form/>
      </div>
    </>
  );
};
export default App;
