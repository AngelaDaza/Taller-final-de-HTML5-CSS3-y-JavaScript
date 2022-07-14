//*----------------------------------------------------------------------------
const bloque = document.querySelectorAll(".bloque");
const h2 = document.querySelectorAll(".h2");
const icon = document.querySelectorAll(".icon");
//*----------------------------------------------------------------------------

h2.forEach((cadenaH2, i)=>{
    h2[i].addEventListener("click", ()=>{
        
        bloque.forEach((cadenaBloque, j)=>{
            bloque[j].classList.remove('activo');
            icon[j].classList.replace("fa-angles-up", "fa-angles-down");
        });
        
        bloque[i].classList.add('activo');
        icon[i].classList.replace("fa-angles-down", "fa-angles-up");
        
    });
});