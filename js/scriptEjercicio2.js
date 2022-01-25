let btnRed = document.getElementById("btn-1");
let btnOrange = document.getElementById("btn-2");
let btnYellow = document.getElementById("btn-3");
let btnGreen = document.getElementById("btn-4");
let btnAqua = document.getElementById("btn-5");
let btnPurple = document.getElementById("btn-6"); 
let box = document.getElementById("caja");

let changeColorBtnUno = () =>{
    if(btnRed.value == "red"){
        box.style.background = btnRed.value;
        console.log(btnRed);
    }
}

let changeColorBtnDos = () =>{
    if(btnOrange.value == "orange"){
        box.style.background = btnOrange.value;
        console.log(btnOrange);
    }
}

let changeColorBtnTres = () =>{
    if(btnYellow.value == "yellow"){
        box.style.background = btnYellow.value;
        console.log(btnYellow);
    }
}

let changeColorBtnCuatro = () =>{
    if(btnGreen.value == "green"){
        box.style.background = btnGreen.value;
        console.log(btnGreen);
    }
}

let changeColorBtnCinco = () =>{
    if(btnAqua.value == "aqua"){
        box.style.background = btnAqua.value;
        console.log(btnAqua);
    }
}

let changeColorBtnSeis = () =>{
    if(btnPurple.value == "purple"){
        box.style.background = btnPurple.value;
        console.log(btnPurple);
    }
}