//Obtención datos de formulario
let form = document.getElementById("formulario");

//Función principal del formulario
form.addEventListener("submit", function (e){
    e.preventDefault();
    errorClean();
    let textName = document.getElementById("nombre").value;
    let textSubject = document.getElementById("asunto").value;
    let textMessage = document.getElementById("mensaje").value;

    let result = validate(textName,textSubject,textMessage);
    if (result == true ) {
        success();
    };

});

//Limpieza de los avisos de error en campos no llenados
let errorClean = () => {
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
}; 

//Función de mensaje enviado con éxito
let success = () => {
    document.querySelector(".resultado").innerHTML = "Mensaje enviado con éxito";
};

//Validación de los campos mediante expresiones regulares
let validate = (textName,textSubject,textMessage) => {
    
    let validatePass = true;
    let nameValidate = /[a-zA-Z]/gim;

    if(nameValidate.test(textName) == false) {
        document.querySelector(".errorNombre").innerHTML = "El nombre es requerido.";

        validatePass = false;
    };

    let subjectValidate = /[a-zA-Z0-9]/gim;

    if(subjectValidate.test(textSubject) == false) {
        document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido.";

        validatePass = false;
    };

    let messageValidate = /[a-zA-Z0-9]/gim;

    if(messageValidate.test(textMessage) == false) {

        document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido.";

        validatePass = false;
    };

    return validatePass;
};