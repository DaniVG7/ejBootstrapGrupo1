const SHADOW_CSS_CLASS = "Shadow";  //definimos el nombre de la clase

function showShadow(element) {
    element.classList.add(SHADOW_CSS_CLASS);  //Aqui podriamos llamarle directamente "Shadow" entre parentesis sin definir arriba la constante pero es mas correcto definirla ya que no va a cambiar.

}

function hideShadow(element) {
    element.classList.remove(SHADOW_CSS_CLASS);

}

let allParagraphs = document.querySelectorAll('p');   // cogemos todas las etiquetas p del documento  ----------

// for (let p of allParagraphs) {
//     p.addEventListener("mouseenter", (event) => {
//         showShadow(event.target)
//     }); // le pasamos el nombre del evento y la funcion que queremos que se ejecute en ese evento (callback)
//     p.addEventListener("mouseleave", (event) => {
//         hideShadow(event.target)
//     }); // En este caso cuando pongamos el mouse en los elementos p ejecutaremos showShadow y cuando lo saquemos hideShadow.
// }

console.log(allParagraphs);


function mouseEnter(event) {
    showShadow(event.target);
}
function mouseLeave(event) {
    hideShadow(event.target);
}

for (let p of allParagraphs) {
    p.addEventListener("mouseenter", mouseEnter); // le pasamos el nombre del evento y la funcion que queremos que se ejecute en ese evento (callback)
    p.addEventListener("mouseleave", mouseLeave); // En este caso cuando pongamos el mouse en los elementos p ejecutaremos showShadow y cuando lo saquemos hideShadow.
}