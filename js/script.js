//Ejercicio 3
let btnSuma = document.getElementById("btn-sumar");
let btnResta = document.getElementById("btn-restar");

//Función suma
let suma = () => {
    let num1 = document.getElementById('valor1').value;
    console.log(valor1);
    let num2 = document.getElementById('valor2').value;
    console.log(valor2);

    let sum = (parseInt(num1) + parseInt(num2));

    document.getElementById('resultado').innerHTML = sum;
}

btnSuma.addEventListener("click", suma);

//Función resta
let resta = () => {
    let num1 = document.getElementById('valor1').value;
    console.log(valor1);
    let num2 = document.getElementById('valor2').value;
    console.log(valor2);

    let res = (parseInt(num1) - parseInt(num2));

    if(res < 0){
        document.getElementById('resultado').innerHTML = 0;
    }else{
        document.getElementById('resultado').innerHTML = res;
    }
}

btnResta.addEventListener("click", resta);