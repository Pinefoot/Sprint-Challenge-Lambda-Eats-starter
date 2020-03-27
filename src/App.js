import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Form from './components/Form';

const App = () => {
  return (
    <div className ="App">
      
      
      
        
      <Route exact path='/' component= {Home}/>
      <Route  exact path='/pizza/' component={Form}/>
         
        
      
      
    </div>
  );
};
export default App;
