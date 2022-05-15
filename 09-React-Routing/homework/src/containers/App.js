import React, { useState } from 'react';

import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import {Route} from "react-router-dom"
import Ciudad from '../components/Ciudad.jsx';
import About from "../components/About.jsx"
import FetchCity from '../Services/FetchCity';


function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    FetchCity(ciudad, setCities)
  }
    
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }

  
  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <Route path= "/" exact>
       <div>
        <Cards
          cities={cities}
          onClose={onClose}
        />
       </div>
      </Route>
      <Route path= "/ciudad/:id" render={({match}) => <Ciudad city={onFilter(match.params.id)}/>  }/> 
         
      <Route path="/about" component={About}/> 

         </div>
  );
}

export default App;
