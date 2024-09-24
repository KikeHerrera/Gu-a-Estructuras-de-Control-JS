function calcularAumento(nombre, salario, categoria) {
    let aumento = 0;
    switch (categoria) {
      case "A":
        aumento = salario * 0.15;
        break;
      case "B":
        aumento = salario * 0.30;
        break;
      case "C":
        aumento = salario * 0.10;
        break;
      case "D":
        aumento = salario * 0.20;
        break;
      default:
        aumento = 0;
    }
    return `Nombre: ${nombre}, Salario: ${salario}, Categoría: ${categoria}, Aumento: ${aumento}, Nuevo salario: ${salario + aumento}`;
  }
  console.log(calcularAumento("Luis", 1000, "B"));
  