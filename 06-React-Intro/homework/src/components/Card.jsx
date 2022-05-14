import React from 'react';
import Temp from "./Temp";
import s from "./Card.module.css"
export default function Card({max, min,name, img, onClose}) {
  // acá va tu código
  return (
  
  <div className ={s.total}>
    <span className ={s.nombre}>{name}</span>
    
    <div className = {s.temperatura}  >
       <Temp label = "MIN" value = {min}></Temp>
       <Temp label = "MAX" value = {max}></Temp>
       <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt= "icono"/>
    </div>
  </div>
  )};