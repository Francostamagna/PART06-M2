import React from "react";
import FetchCityById from "../Services/FetchCityById";
import { useParams } from "react-router-dom";

export default function Ciudad() {
    const [city, setCiudad] = React.useState()
    const {id} = useParams()
    
    React.useEffect(() =>{
        FetchCityById(id,setCiudad)
     },[id])
    
    return city == undefined ? (<h1>CARGANDO...</h1>):
           city == null ? (  <h1>CIUDAD NO ENCONTRADA</h1>):(
       
        <div className="ciudad">
                <div className="container">
                   <h2>{city.name}</h2>
                   <div className="info">
                   <div>Temperatura: {city.temp} ºC</div>
                   <div>Clima: {city.weather}</div>
                   <div>Viento: {city.wind} km/h</div>
                   <div>Cantidad de nubes: {city.clouds}</div>
                   <div>Latitud: {city.latitud}º</div>
                   <div>Longitud: {city.longitud}º</div>
                   </div>
             </div> 
          </div>)}
          
        
