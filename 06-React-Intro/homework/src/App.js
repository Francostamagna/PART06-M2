import React from 'react';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';
import styles from "./App.module.css";

function App() {
  return (
    <div className = {styles.app}>
      <div className = {styles.header} />
      <div className = {styles.container}>
      <div className= {styles.mainCard}>
        <Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
        />
      </div>
      <div className = {styles.tarjetillas}>
        <Cards
          cities={data}
        />
      </div>
      <div className={styles.barra}>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>
    </div>
    </div>
  );
}

export default App;
