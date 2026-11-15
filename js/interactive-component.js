$(document).ready(function(){
    $(".tap-item").on("mouseenter click", function(){
        // quita la clase active de todas las opciones y se la pone a la actual
        $(".tap-item").removeClass("active");
        $(this).addClass("active");

        // optiene los valores del html de los atributos data
        var newText = $(this).attr("data-text");
        var newImg = $(this).attr("data-img");

        // Cambiar el texto y la imagen con un  efecto de transición
        $("#interactiveText").fadeOut(150, function(){
            $(this).text(newText).fadeIn(150);
        });
        $("#interactiveImg").fadeOut(150, function(){
            $(this).attr("src", newImg).fadeIn(150);
        });
    });
});