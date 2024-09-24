function procesarValores(valores) {
    let negativos = 0, positivos = 0, multiplos15 = 0, paresAcumulados = 0;
    for (let valor of valores) {
      if (valor < 0) negativos++;
      if (valor > 0) positivos++;
      if (valor % 15 === 0) multiplos15++;
      if (valor % 2 === 0) paresAcumulados += valor;
    }
    return `Negativos: ${negativos}, Positivos: ${positivos}, Múltiplos de 15: ${multiplos15}, Pares acumulados: ${paresAcumulados}`;
  }
  console.log(procesarValores([12, -5, 30, 15, -20, 16, 45, 0]));
  