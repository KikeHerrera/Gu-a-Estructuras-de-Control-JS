function calcularDescuentoCoche(coche) {
    let descuento = 0;
    if (coche === "FORD FIESTA") descuento = 0.05;
    else if (coche === "FORD FOCUS") descuento = 0.10;
    else if (coche === "FORD ESCAPE") descuento = 0.20;
    return `Coche: ${coche}, Descuento: ${descuento * 100}%`;
  }
  console.log(calcularDescuentoCoche("FORD FIESTA"));
  