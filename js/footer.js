document.getElementById("newsletter-form").addEventListener("submit", function(e){


    e.preventDefault();
    const email = document.getElementById("newsletter-email").value;
    const errorMns = document.getElementById("newsletter-error");

    if (!email.includes("@") || !email.includes(".")){
        errorMns.style.display = "block";
    }else {
        errorMns.style.display = "block";
        errorMns.textContent = "¡Thanks to subscribing to Rhode!";
        errorMns.style.color = "#F1C2CA"
        this.reset();
    }
});
// Si el email incluye @ y . , salta el mensaje de gracias por suscribirte, si no, salta el mensaje de que es incorrcto
//  cuando lo envia se resetea
// si detecta que esta en modo rosa cambia el texto a rojo y vicebersa 

$(document).ready(function(){

    AOS.init({
        duration:1000
    })
})