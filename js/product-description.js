$(document).ready(function(){
    $(".image-detail-btn").on("click", function(){
        $(".image-detail-btn").removeClass("active");
        $(this).addClass("active");
        
        var newImageSrc = $(this).find("img").attr("src");

        $("#main-product-img").fadeOut(150, function(){
            $(this).attr("src", newImageSrc).fadeIn(150);
        });
    });
    
    $(".acordeon-titulo").on("click", function(){
        var contenidoProducto = $(this).next();

        $(".acordeon-content").not(contenidoProducto).slideUp();
        $(".acordeon-titulo").not(this).removeClass("abierto");

        contenidoProducto.slideToggle();
        $(this).toggleClass("abierto");
    });

    tippy(".swatch-btn", {
        animation: "scale",
        placement: "bottom",
    }); 

    $(".swatch-btn").on("click", function(){

        $(".swatch-btn").removeClass("active");
        $(this).addClass("active");
    });
});
