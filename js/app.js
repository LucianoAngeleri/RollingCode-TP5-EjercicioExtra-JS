let btnInicio = document.getElementById("btnInicio")
    btnPiedra = document.getElementById("btnPiedra"),
    btnPapel = document.getElementById("btnPapel"),
    btnTijera = document.getElementById("btnTijera"),
    selectorJugada = document.getElementById("selectorJuegada"),
    modalGanador = document.getElementById("modalGanador"),
    modalPerdedor = document.getElementById("modalPerdedor"),
    modalEmpate = document.getElementById("modalEmpate"),
    modalMovGanador = document.getElementById("modalMovGanador"),
    modalMovPerdedor = document.getElementById("modalMovPerdedor"),
    modalMovEmpate = document.getElementById("modalMovEmpate");
let movimientoUsuario;

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
    return `${usuario1}`;
  } else if (movimiento1 === "Piedra" && movimiento2 === "Papel") {
    return `${usuario2}`;
  } else if (movimiento1 === "Papel" && movimiento2 === "Tijera") {
    return `${usuario2}`;
  } else if (movimiento1 === "Papel" && movimiento2 === "Piedra") {
    return `${usuario1}`;
  } else if (movimiento1 === "Tijera" && movimiento2 === "Piedra") {
    return `${usuario2}`;
  } else if (movimiento1 === "Tijera" && movimiento2 === "Papel") {
    return `${usuario1}`;
  }
};

function verSelector() {
  btnInicio.classList.add("d-none")
  selectorJugada.classList.remove("d-none")
}
function reiniciar(){
  selectorJugada.classList.add("d-none")
  btnInicio.classList.remove("d-none")
  btnInicio.innerHTML="Volver a Jugar"
}
function mostrarModalGanador(mensajeUsuario,mensajeComputadora) {
  let movimientos = document.createElement("p")
  movimientos.classList.add("lead","fs-3")
  movimientos.innerHTML = `
  <ul class="list-unstyled">
    <li class="list-item fs-6">${mensajeUsuario}</li>
    <li class="list-item fs-6">${mensajeComputadora}</li>
  </ul>`
  modalMovGanador.appendChild(movimientos)
  var modal = new bootstrap.Modal(modalGanador);
  modal.show();
  
}
function mostrarModalPerdedor(mensajeUsuario,mensajeComputadora) {
  let movimientos = document.createElement("p")
  movimientos.classList.add("lead","fs-3")
  movimientos.innerHTML = `
  <ul class="list-unstyled">
  <li class="list-item fs-6">${mensajeUsuario}</li>
    <li class="list-item fs-6">${mensajeComputadora}</li>
  </ul>`
  modalMovPerdedor.appendChild(movimientos)
  var modal = new bootstrap.Modal(modalPerdedor);
  modal.show();
}
function mostrarModalEmpate(mensajeUsuario,mensajeComputadora) {
  let movimientos = document.createElement("p")
  movimientos.classList.add("lead","fs-3")
  movimientos.innerHTML = `
  <ul class="list-unstyled">
    <li class="list-item fs-6">${mensajeUsuario}</li>
    <li class="list-item fs-6">${mensajeComputadora}</li>
  </ul>`
  modalMovEmpate.appendChild(movimientos)
  var modal = new bootstrap.Modal(modalEmpate);
  modal.show();
  
}

function verGanador(){
  modalMovGanador.innerHTML="";
  modalMovPerdedor.innerHTML="";
  modalMovEmpate.innerHTML="";
  const movimientoComputadora = selectorMovimiento(generadorMovimiento());
  const mensajeUsuario = escribirMovimiento("Usted", movimientoUsuario);
  const mensajeComputadora = escribirMovimiento("Computadora", movimientoComputadora);
  const ganador = elegirGanador("Usuario", movimientoUsuario, "Computadora", movimientoComputadora);
  if (ganador === "Usuario") {
    mostrarModalGanador(mensajeUsuario, mensajeComputadora)
  }else if(ganador === "Computadora"){
    mostrarModalPerdedor(mensajeUsuario, mensajeComputadora)
  }else{
    mostrarModalEmpate(mensajeUsuario, mensajeComputadora)
  }
}

btnInicio.addEventListener("click",verSelector)

btnPiedra.addEventListener("click",() => {

    movimientoUsuario = selectorMovimiento(parseInt(btnPiedra.value))
    verGanador();
    reiniciar();
    })
    btnPapel.addEventListener("click",() => {
      movimientoUsuario = selectorMovimiento(parseInt(btnPapel.value))
      verGanador();
      reiniciar();
    })
btnTijera.addEventListener("click",() => {
    movimientoUsuario = selectorMovimiento(parseInt(btnTijera.value))
    verGanador();
    reiniciar();
  })