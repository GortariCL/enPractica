//Ejercicio 3
let btnSuma = document.getElementById("btn-sumar");
let btnResta = document.getElementById("btn-restar");

//Función suma
const suma = (valor1, valor2) => {
    let num1 = document.getElementById('valor1').value;
    console.log(valor1);
    let num2 = document.getElementById('valor2').value;
    console.log(valor2);

    const sum = (parseInt(num1) + parseInt(num2));

    resultado.innerHTML = sum;
}
suma(valor1, valor2);
btnSuma.addEventListener("click", suma);


//Función resta
const resta = (valor1, valor2) => {
    let num1 = document.getElementById('valor1').value;
    console.log(valor1);
    let num2 = document.getElementById('valor2').value;
    console.log(valor2);

    const res = (parseInt(num1) - parseInt(num2));

    if(res < 0){
        resultado.innerHTML = 0;
    }else{
        resultado.innerHTML = res;
    }
}

resta(valor1, valor2);
btnResta.addEventListener("click", resta);