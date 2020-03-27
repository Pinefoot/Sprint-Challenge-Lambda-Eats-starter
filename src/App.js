import React from "react";
import { Route } from "react-router-dom";
import Home from "./Components/Home.js";
import Form from './Components/Form';

const App = () => {
  return (
    <div>
      <h1>Lambda Eats</h1>
      
      <p>You can remove this code and create your own header</p>
      <Route exact path='/' component= {Home}/>
      <Route exact path='/form' component={Form}/>
    </div>
  );
};
export default App;
