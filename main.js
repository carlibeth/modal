document.querySelector("#clic1").addEventListener("click", function(event){
    document.querySelector("#modal").classList.replace("oculto", "mostrar");

});

document.querySelector("#cerrar").addEventListener("click", function(event){
    document.querySelector("#modal").classList.replace("mostrar", "oculto");

});

