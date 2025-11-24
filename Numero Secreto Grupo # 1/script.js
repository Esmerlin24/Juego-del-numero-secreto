let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 0;

function verificar() {
    let numero = document.getElementById("numero").value;

    if (numero === "") {
        alert("Por favor ingresa un número.");
        return;
    }

    numero = parseInt(numero);
    intentos++;

    let resultado = document.getElementById("resultado");

    if (numero < numeroSecreto) {
        resultado.textContent = "El número secreto es mayor.";
    } 
    else if (numero > numeroSecreto) {
        resultado.textContent = "El número secreto es menor.";
    } 
    else {
        resultado.textContent = `¡Felicidades! Adivinaste el número en ${intentos} intento(s).`;
    }

    document.getElementById("numero").value = "";
}

function nuevoJuego() {
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    intentos = 0;
    document.getElementById("resultado").textContent = "";
}



