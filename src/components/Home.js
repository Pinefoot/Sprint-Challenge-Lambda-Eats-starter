import React from 'react';
import {Link} from 'react-router-dom';

const Home = () =>{
    return (
        <div>
            <h1>Lambda Eats</h1>
            <h3>Click here to oder your pizza!</h3>
            <Link to={"/pizza"}>

            <div> 
                Let's make a Pizza!
             </div>
            
            </Link>
        </div>
        
    )
}

export default Home;