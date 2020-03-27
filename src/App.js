import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Form from './components/Form';

const App = () => {
  return (
    <div>
      
      
      <Home>
      <Route exact path='/' component= {Home}/>
      <Route exact path='/pizza'>
        <Form/>
      </Route> 
        
      </Home> 
      
    </div>
  );
};
export default App;
