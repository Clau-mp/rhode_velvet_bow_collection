
// Cuando desliza el usuario se vuelve transparente
$(document).ready(function(){
    var header = $("header");
    var boton = $(".menu-btn");

    // Abrir y cerrar el menú
    boton.on("click", function(){
        $(".menu").slideToggle();
        $(this).toggleClass("open");

        // Si detecta que el menú desplegable esta abierto, se elimina la transparencia
        if ($(this).hasClass("open")){
            header.removeClass("transparente")
        }
    });

    $(window).on("scroll", function(){
        var scroolActual =$(window).scrollTop();
        var menuOpen = boton.hasClass('open');
            // si el usuario se desplaza 10 píxeles en la web, se abre la clase transparente
        if (scroolActual > 10 && !menuOpen){
            header.addClass("transparente");
        } else{
            header.removeClass("transparente"); // si no, vuelve a normal
        }
    })

})