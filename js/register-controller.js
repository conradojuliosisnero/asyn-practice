import { clientServices } from "../Js/client-service.js";

const formulario  = document.querySelector("[data-form]");

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    console.log(nombre, " - ",email);
    clientServices.createClient(nombre,email).then( (respuesta) => {
        console.log(respuesta);
    }).catch((e) => {
        console.log(e);
    });
});