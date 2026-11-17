$(document).ready(function(){

    AOS.init({
        duration:1000
    })

    $(".image-detail-btn").on("click", function(){
        $(".image-detail-btn").removeClass("active");
        $(this).addClass("active");
        // Primero al hacer click en una de las imagenes en miniatura, la imagen que esta en grande se le quita el active, y la que tocas se le añade el active
        var newImageSrc = $(this).find("img").attr("src");

        //Le aplicamos una transición 
        $("#main-product-img").fadeOut(150, function(){
            $(this).attr("src", newImageSrc).fadeIn(150);
        });
    });
    
    // ACORDEON
    $(".acordeon-titulo").on("click", function(){
        var contenidoProducto = $(this).next();

        $(".acordeon-content").not(contenidoProducto).slideUp();
        $(".acordeon-titulo").not(this).removeClass("abierto");

        contenidoProducto.slideToggle();
        $(this).toggleClass("abierto");
    });

    // Instalación y animación de la libreria tippy
    tippy(".swatch-btn", {
        animation: "scale",
        placement: "bottom",
    }); 
    // Circulo que indica que color seleccionaste
    $(".swatch-btn").on("click", function(){

        $(".swatch-btn").removeClass("active");
        $(this).addClass("active");
    });
});
