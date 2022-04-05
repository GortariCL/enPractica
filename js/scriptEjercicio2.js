//obtención de datos de las variables por ID
let btnRed = document.getElementById("btn-1");
let btnOrange = document.getElementById("btn-2");
let btnYellow = document.getElementById("btn-3");
let btnGreen = document.getElementById("btn-4");
let btnAqua = document.getElementById("btn-5");
let btnPurple = document.getElementById("btn-6"); 
let box = document.getElementById("caja");

//Función cambio de color con btn1
let changeColorBtn1 = () => box.style.backgroundColor = btnRed.style.backgroundColor;

//Función cambio de color con btn2
let changeColorBtn2 = () => box.style.backgroundColor = btnOrange.style.backgroundColor;

//Función cambio de color con btn3
let changeColorBtn3 = () => box.style.backgroundColor = btnYellow.style.backgroundColor;

//Función cambio de color con btn4
let changeColorBtn4 = () => box.style.backgroundColor = btnGreen.style.backgroundColor;

//Función cambio de color con btn5
let changeColorBtn5 = () => box.style.backgroundColor = btnAqua.style.backgroundColor;

//Función cambio de color con btn6
let changeColorBtn6 = () => box.style.backgroundColor = btnPurple.style.backgroundColor;