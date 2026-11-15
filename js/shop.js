$(document).ready(function(){
    $(".filter-btn").on("click", function(){
        //primero le quitamos a todas las categorias la clase active y decimos que se active la categoria en la que hemos pulsado
        $(".filter-btn").removeClass("active");
        $(this).addClass("active");

        //se optiene la categoria seleccionada del boton 
        const selectCategory = $(this).attr("data-filter");

        // Y mira en cada tarjeta de producto cual es la que tiene esa categoria
        $(".product-card").each(function(){
            const cardCategory = $(this).attr("data-category") || '';
            
            // Si es all el que se pincha se muestra, y si esta incluida en los atrivutos de la tarjeta también
            //si no, se esconde la tarjeta 
            if (selectCategory === "all" || cardCategory.includes(selectCategory)){
                $(this).removeClass("hide");
            } else{
                $(this).addClass("hide");
            }
        });
    });
});