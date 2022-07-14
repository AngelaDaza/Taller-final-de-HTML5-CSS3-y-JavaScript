//*------------------------------------------------------------
const formulario = document.querySelectorAll(".text");
const submint = document.querySelector(".form");
const submintButton = document.getElementById("submit");
const reiniciar = document.querySelector(".reinciciar");
//*------------------------------------------------------------

reiniciar.addEventListener("click", ()=> {
    formulario.forEach((valor, i)=>{
        formulario[i].value = "";
    });
});

submint.addEventListener("submit", (event)=>{
    event.preventDefault();
    formulario.forEach((valor, i)=>{
        console.log(formulario[i].value);
    });

    formulario.forEach((valor, i)=>{
        formulario[i].value = "";
    });

    submintButton.blur();
});

