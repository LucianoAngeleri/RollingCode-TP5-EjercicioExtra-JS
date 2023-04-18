

const generadorMovimiento = () => Math.floor(Math.random() * 3) + 1;
const selectorMovimiento = (numero) => {
  switch (numero) {
    case 1:
      return "Piedra";
    case 2:
      return "Papel";
    case 3:
      return "Tijera";
    default:
      break;
  }
};
const asignarEmoji = (texto) => {
  switch (texto) {
    case "Piedra":
      return " 👊🏻";
    case "Papel":
      return " ✋🏻";
    case "Tijera":
      return " ✌🏻";
  }
};
const escribirMovimiento = (usuario, movimiento) => {
  return `${usuario} eligió ${movimiento + asignarEmoji(movimiento)}`;
};
const elegirGanador = (usuario1, movimiento1, usuario2, movimiento2) => {
  if (movimiento1 === movimiento2) {
    return "Empate";
  } else if (movimiento1 === "Piedra" && movimiento2 === "Tijera") {
    return `${usuario1} (${asignarEmoji(movimiento1)}) le gana a ${usuario2} (${asignarEmoji(movimiento2)})`;
  } else if (movimiento1 === "Piedra" && movimiento2 === "Papel") {
    return `${usuario2} (${asignarEmoji(movimiento2)}) le gana a ${usuario1} (${asignarEmoji(movimiento1)})`;
  } else if (movimiento1 === "Papel" && movimiento2 === "Tijera") {
    return `${usuario2} (${asignarEmoji(movimiento2)}) le gana a ${usuario1} (${asignarEmoji(movimiento1)})`;
  } else if (movimiento1 === "Papel" && movimiento2 === "Piedra") {
    return `${usuario1} (${asignarEmoji(movimiento1)}) le gana a ${usuario2} (${asignarEmoji(movimiento2)})`;
  } else if (movimiento1 === "Tijera" && movimiento2 === "Piedra") {
    return `${usuario2} (${asignarEmoji(movimiento2)}) le gana a ${usuario1} (${asignarEmoji(movimiento1)})`;
  } else if (movimiento1 === "Tijera" && movimiento2 === "Papel") {
    return `${usuario1} (${asignarEmoji(movimiento1)}) le gana a ${usuario2} (${asignarEmoji(movimiento2)})`;
  }
};
let nombreUsuario = prompt("Hola! Vamos a jugar a Piedra-Papel-Tijeras\nPrimero ingresa tu nombre:");
let eleccion;
let condicion = true;
do {
    eleccion = parseInt(prompt("Elija una opcion:\n1-Piedra\n2-Papel\n3-Tijera"));
    if (isNaN(eleccion) || (eleccion !== 1 && eleccion !== 2 && eleccion !== 3)|| eleccion === null || eleccion === undefined) {
        alert("Ingresa un número válido.")
        condicion = true;
    }else{
        condicion = false;
    }
} while (condicion);

const movimientoUsuario = selectorMovimiento(eleccion);
const movimientoComputadora = selectorMovimiento(generadorMovimiento());

alert(escribirMovimiento(nombreUsuario, movimientoUsuario));
alert(escribirMovimiento("Computadora", movimientoComputadora));

const mensajeGanador = elegirGanador(nombreUsuario, movimientoUsuario, "Computadora", movimientoComputadora);
alert(mensajeGanador);

document.write('<section class="container">');
document.write(`<h3 class="display-3 text-center py-2">Movimientos realizados:</h3>`);
document.write(`<p class="display-4 text-primary py-2">${escribirMovimiento(nombreUsuario, movimientoUsuario)}</p>`);
document.write(`<p class="display-4 text-danger py-2">${escribirMovimiento("Computadora", movimientoComputadora)}</p>`);
document.write(`<h3 class="display-3 text-center text-success py-2">Resultado ganador:</h3>`);
document.write(`<h4 class="display-4 text-center text-bg-success round rounded-5 py-2">${mensajeGanador}</h3>`);
document.write("</h5>");
