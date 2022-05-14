setCities((oldCities) => {
    if(oldCities.some(city => cities.name === ciudad.name)){
      return oldCities
    }
    else{
      return [...oldCities, ciudad];
    }
  });
}  
 else {
  alert("Ciudad no encontrada");
}
});


}