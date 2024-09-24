function calcularPromedios(manana, tarde, noche) {
    let promedioManana = manana.reduce((a, b) => a + b, 0) / manana.length;
    let promedioTarde = tarde.reduce((a, b) => a + b, 0) / tarde.length;
    let promedioNoche = noche.reduce((a, b) => a + b, 0) / noche.length;
  
    let mayorPromedio = Math.max(promedioManana, promedioTarde, promedioNoche);
    let turnoMayor = mayorPromedio === promedioManana ? "Mañana" :
                     mayorPromedio === promedioTarde ? "Tarde" : "Noche";
  
    return `Promedio Mañana: ${promedioManana}, Promedio Tarde: ${promedioTarde}, Promedio Noche: ${promedioNoche}, Turno con mayor promedio: ${turnoMayor}`;
  }
  console.log(calcularPromedios([18, 20, 22, 19, 21], [23, 25, 22, 24, 26, 27], [30, 31, 29, 28, 32, 33, 34, 35, 36, 37, 38]));
  