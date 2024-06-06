import {
    lista_soporte_tecnico
} from "./data_tecnico.js";

let div_soporte = document.querySelector(".soporte")

lista_soporte_tecnico.forEach((cada_categoria) => {

    let div = document.createElement("div")
    div.classList.add("div_caja_componente")

    div.innerHTML = `
      
        
    `

    div_soporte.appendChild(div)


})