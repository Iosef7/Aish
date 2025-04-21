// Selecciona la barra lateral y la sección 1
const barraLateral = document.querySelector(".barra-lateral");
const seccion1 = document.querySelector(".seccion-1");

// Al entrar el mouse, se expande la barra lateral y reduce la sección 1
barraLateral.addEventListener("mouseenter", () => {
    console.log("Mouse enter detectado");
    barraLateral.classList.add("barra-lateral-extendida");

    // Escala la sección 1 y sus elementos internos
    seccion1.style.transform = "translate(105px, -22px) scale(0.9)"; // Mueve y reduce al 90% del tamaño original
    seccion1.style.transition = "transform 0.3s ease"; // Transición suave
});

// Al salir el mouse, se restaura la barra lateral y la sección 1
barraLateral.addEventListener("mouseleave", () => {
    console.log("Mouse leave detectado");
    barraLateral.classList.remove("barra-lateral-extendida");

    // Restaura la posición y el tamaño original de la sección 1
    seccion1.style.transform = "translate(0, 0) scale(1)"; // Vuelve al tamaño original
    seccion1.style.transition = "transform 0.3s ease"; // Transición suave
});