function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
    let notaFinal = (examen * 0.20) + (tareas * 0.40) + (asistencia * 0.10) + (investigacion * 0.30);
    return `Nombre: ${nombre}, Carnet: ${carnet}, Nota Final: ${notaFinal}`;
  }
  console.log(calcularNotaFinal("Juan", "A12345", 80, 90, 85, 88));
  