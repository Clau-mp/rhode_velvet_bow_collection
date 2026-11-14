$(document).ready(function(){
    var productContainer = $("#collection-products .product-list");
    var productsBefore = $("#products-before");
    var productsAfter = $("#products-after");

    //desplazar los productos a la izquierda cuando haga click en el boton
    productsBefore.on("click", function(){
        var carWidth = productContainer.find(".product-card").outerWidth(true); 
        var currentScroll = productContainer.scrollLeft();

        // si el scroll es menor que 5( los productos) se busca y pone la tarjeta 1 y se deplaza hasta ahí
        if(currentScroll <= 5){
            var maxScroll = productContainer[0].scrollWidth - productContainer[0].clientWidth;
            productContainer.animate({scrollLeft: maxScroll}, 300)
        } else{
            //animación del scroll que dura 0.3s
            productContainer.animate({
             scrollLeft: productContainer.scrollLeft() - carWidth
             }, 300)}
    });

    // el mismo procedimiento pero en la izquierda y los productos hacia la derecha
    productsAfter.on("click", function(){
        var carWidth = productContainer.find(".product-card").outerWidth(true);
        var currentScroll = productContainer.scrollLeft();
        var maxScroll = productContainer[0].scrollWidth - productContainer[0].clientWidth;

        if(currentScroll >= maxScroll - 5){
            productContainer.animate({scrollLeft: 0}, 300);
        }else{
            productContainer.animate({
                scrollLeft: productContainer.scrollLeft() + carWidth
            }, 300);
        }
        
    })
})