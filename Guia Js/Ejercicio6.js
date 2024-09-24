
function calcularDescuentoViaje(origen, destino) {
    let descuento = 0;
    if (origen === "Palma" && destino === "La costa del Sol") descuento = 0.05;
    else if (origen === "Palma" && destino === "Panchimalco") descuento = 0.10;
    else if (origen === "Palma" && destino === "Puerto el Triunfo") descuento = 0.15;
    return `Origen: ${origen}, Destino: ${destino}, Descuento: ${descuento * 100}%`;
  }
  console.log(calcularDescuentoViaje("Palma", "Panchimalco"));
  