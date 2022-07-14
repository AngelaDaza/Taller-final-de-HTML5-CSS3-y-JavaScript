//!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//!++                         efecto acordeon                                ++
//!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//*----------------------------------------------------------------------------
const bloque = document.querySelectorAll(".repositorio");
const h2 = document.querySelectorAll(".titulo");
const icon = document.querySelectorAll(".titulo_icon");
//*----------------------------------------------------------------------------

h2.forEach((cadenaH2, i)=>{
    h2[i].addEventListener("click", ()=>{
        
        bloque.forEach((cadenaBloque, j)=>{
            bloque[j].classList.remove('activar');
            icon[j].classList.replace("fa-angles-up", "fa-angles-down");
        });
        
        bloque[i].classList.add('activar');
        icon[i].classList.replace("fa-angles-down", "fa-angles-up");
        
    });
});

//!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//!++                    Selecionando punto del taller                       ++
//!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//*----------------------------------------------------------------------------
const tallerSeleccionado = document.querySelectorAll(".puntotaller1");
//*----------------------------------------------------------------------------

tallerSeleccionado[0].addEventListener("click", ()=>{
    window.open("Multimedia/Pseint/Taller1/Taller1_1/taller1_1.html");
});

tallerSeleccionado[1].addEventListener("click", ()=>{
    window.open("Multimedia/Pseint/Taller1/Taller1_2/taller1_2.html");
});

tallerSeleccionado[2].addEventListener("click", ()=>{
    window.open("Multimedia/Pseint/Taller1/Taller1_3/taller1_3.html");
});

tallerSeleccionado[3].addEventListener("click", ()=>{
    window.open("Multimedia/Pseint/Taller1/Taller1_4/taller1_4.html");
});

tallerSeleccionado[4].addEventListener("click", ()=>{
    window.open("Multimedia/Pseint/Taller1/Taller1_5/taller1_5.html");
});

//*----------------------------------------------------------------------------
const tallerSeleccionado2 = document.querySelectorAll(".puntotaller2");
//*----------------------------------------------------------------------------

tallerSeleccionado2[0].addEventListener("click", ()=>{
    window.open("Multimedia/Pseint/Taller2/Taller2_1/taller2_1.html");
});

tallerSeleccionado2[1].addEventListener("click", ()=>{
    window.open("Multimedia/Pseint/Taller2/Taller2_2/taller2_2.html");
});

tallerSeleccionado2[2].addEventListener("click", ()=>{
    window.open("Multimedia/Pseint/Taller2/Taller2_3/taller2_3.html");
});

tallerSeleccionado2[3].addEventListener("click", ()=>{
    window.open("Multimedia/Pseint/Taller2/Taller2_4/taller2_4.html");
});

tallerSeleccionado2[4].addEventListener("click", ()=>{
    window.open("Multimedia/Pseint/Taller2/Taller2_5/taller2_5.html");
});

tallerSeleccionado2[5].addEventListener("click", ()=>{
    window.open("Multimedia/Pseint/Taller2/Taller2_6/taller2_6.html");
});

tallerSeleccionado2[6].addEventListener("click", ()=>{
    window.open("Multimedia/Pseint/Taller2/Taller2_7/taller2_7.html");
});

tallerSeleccionado2[7].addEventListener("click", ()=>{
    window.open("Multimedia/Pseint/Taller2/Taller2_8/taller2_8.html");
});

tallerSeleccionado2[8].addEventListener("click", ()=>{
    window.open("Multimedia/Pseint/Taller2/Taller2_9/taller2_9.html");
});

tallerSeleccionado2[9].addEventListener("click", ()=>{
    window.open("Multimedia/Pseint/Taller2/Taller2_10/taller2_10.html");
});

//*----------------------------------------------------------------------------
const tallerSeleccionado3 = document.querySelectorAll(".puntotaller3");
//*----------------------------------------------------------------------------

tallerSeleccionado3[0].addEventListener("click", ()=>{
    window.open("Multimedia/Pseint/Taller3/Taller3_1/taller3_1.html");
});

tallerSeleccionado3[1].addEventListener("click", ()=>{
    window.open("Multimedia/Pseint/Taller3/Taller3_2/taller3_2.html");
});

tallerSeleccionado3[2].addEventListener("click", ()=>{
    window.open("Multimedia/Pseint/Taller3/Taller3_3/taller3_3.html");  
});

tallerSeleccionado3[3].addEventListener("click", ()=>{
    window.open("Multimedia/Pseint/Taller3/Taller3_4/taller3_4.html");
});

tallerSeleccionado3[4].addEventListener("click", ()=>{
    window.open("Multimedia/Pseint/Taller3/Taller3_5/taller3_5.html");
});

tallerSeleccionado3[5].addEventListener("click", ()=>{
    window.open("Multimedia/Pseint/Taller3/Taller3_6/taller3_6.html");
});

tallerSeleccionado3[6].addEventListener("click", ()=>{
    window.open("Multimedia/Pseint/Taller3/Taller3_7/taller3_7.html");
});

tallerSeleccionado3[7].addEventListener("click", ()=>{
    window.open("Multimedia/Pseint/Taller3/Taller3_8/taller3_8.html");
});

//*----------------------------------------------------------------------------
const tallerSeleccionado4 = document.querySelectorAll(".puntotaller4");
//*----------------------------------------------------------------------------
tallerSeleccionado4[0].addEventListener("click", ()=>{
    window.open("Multimedia/Pseint/Taller4/Taller4_1/taller4_1.html");
});

tallerSeleccionado4[1].addEventListener("click", ()=>{
    window.open("Multimedia/Pseint/Taller4/Taller4_2/taller4_2.html");
});

tallerSeleccionado4[2].addEventListener("click", ()=>{
    window.open("Multimedia/Pseint/Taller4/Taller4_3/taller4_3.html");  
});

tallerSeleccionado4[3].addEventListener("click", ()=>{
    window.open("Multimedia/Pseint/Taller4/Taller4_4/taller4_4.html");
});

tallerSeleccionado4[4].addEventListener("click", ()=>{
    window.open("Multimedia/Pseint/Taller4/Taller4_5/taller4_5.html");
});

//*----------------------------------------------------------------------------
const tallerSeleccionado5 = document.querySelector(".puntoTallerJava1");
const tallerSeleccionado6 = document.querySelector(".puntoTallerJava2");
const tallerSeleccionado7 = document.querySelector(".puntoTallerJava3");
const tallerSeleccionado8 = document.querySelector(".puntoTallerJava4");
const tallerSeleccionado9 = document.querySelector(".puntoTallerJava5");
//*----------------------------------------------------------------------------
tallerSeleccionado5.addEventListener("click", ()=>{
    window.open("Multimedia/Java/Taller1/Taller1.html");
});

tallerSeleccionado6.addEventListener("click", ()=>{
    window.open("Multimedia/Java/Taller2/Taller2.html");
});

tallerSeleccionado7.addEventListener("click", ()=>{
    window.open("Multimedia/Java/Taller3/Taller3.html");  
});

tallerSeleccionado8.addEventListener("click", ()=>{
    window.open("Multimedia/Java/Taller4/Taller4.html");  
});

tallerSeleccionado9.addEventListener("click", ()=>{
    window.open("Multimedia/Java/TallerFinal/TallerFinal.html");  
});