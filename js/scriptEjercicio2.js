//obtención de datos de las variables por ID
let btnRed = document.getElementById("btn-1");
let btnOrange = document.getElementById("btn-2");
let btnYellow = document.getElementById("btn-3");
let btnGreen = document.getElementById("btn-4");
let btnAqua = document.getElementById("btn-5");
let btnPurple = document.getElementById("btn-6"); 
let box = document.getElementById("caja");

//Función cambio de color con btn1
let changeColorBtn1 = () =>{
    if(btnRed.value == "red"){
        box.style.background = btnRed.value;
        console.log(btnRed);
    };
};

//Función cambio de color con btn2
let changeColorBtn2 = () =>{
    if(btnOrange.value == "orange"){
        box.style.background = btnOrange.value;
        console.log(btnOrange);
    };
};

//Función cambio de color con btn3
let changeColorBtn3 = () =>{
    if(btnYellow.value == "yellow"){
        box.style.background = btnYellow.value;
        console.log(btnYellow);
    };
};

//Función cambio de color con btn4
let changeColorBtn4 = () =>{
    if(btnGreen.value == "green"){
        box.style.background = btnGreen.value;
        console.log(btnGreen);
    };
};

//Función cambio de color con btn5
let changeColorBtn5 = () =>{
    if(btnAqua.value == "aqua"){
        box.style.background = btnAqua.value;
        console.log(btnAqua);
    };
};

//Función cambio de color con btn6
let changeColorBtn6 = () =>{
    if(btnPurple.value == "purple"){
        box.style.background = btnPurple.value;
        console.log(btnPurple);
    };
};