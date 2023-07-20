import { servicioClientes } from "../client-service";

const formulario  = document.querySelector("[data-form]");

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    //creamos el cliente nuevo
    servicioClientes.createClient(nombre,email).then( (respuesta) => {
        console.log(respuesta);
    }).catch((e) => {
        console.log(e);
    });
});
