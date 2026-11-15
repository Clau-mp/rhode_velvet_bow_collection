$(document).ready(function(){
    var slide = $(".slide");
    var botonNext = $("#next");
    var botonPrev = $("#previous");
    var dotsSlide = $("#slide-dots");
    var total = slide.length;
    var actual = 0;

        // creación de los circulos 
    dotsSlide.html("");
    for (var i = 0; i < total; i++){
        dotsSlide.append('<button type="button" class="dot" data-index="' + i + '"></button>');
        //definimos que es un elemento boton, le asignamos la clase de css que teniamos hecho para que adopte ese estilo y le decimos a que numero de la diapositiva pertenece
    }

    var dots = $(".dot");
    dots.eq(0).addClass("active"); // cuando el circulo tenga la posición 0, se activa y por lo tanto ese circulo se vera iluminado

    //función mostrar las imágenes  y el video

    function show (indiceSlide){
        if(indiceSlide === actual) return;

        var videoSale = slide.eq(actual).find("video")[0];
        if(videoSale) videoSale.pause(); //si el video no esta en la pantalla se pausa 

        slide.eq(actual).fadeOut(600);//que haaga una transición de 0.6s
        actual = indiceSlide;
        slide.eq(actual).fadeIn(600);

        var videoEntra = slide.eq(actual).find("video")[0];
        if(videoEntra){
            videoEntra.currentTime = 0; //si el video entra a el slide se reinicia
            videoEntra.play().catch(function(){}); // y se pone play
        }

        dots.removeClass("active").eq(actual).addClass("active"); //actualizar los circulos si cambian de imagen
    }
    //función de movimiento
    //n es cuando la diapositiva actual tiene +1 es decir una imagen más ( la siguente) entonces cuando pase eso, mostrar n ( la siguente imagen)
    function siguiente(){
        var n = actual + 1;
        if (n === total){
            n = 0;
        }
        show(n);
    }
    //cuando  n es menor que 0 n equivale a esa imagen menos 1 es decir la imagen que hay antes por lo que n muestra la anterior
    function anterior(){
        var n = actual - 1;
        if (n < 0){
            n = total - 1;
        }
        show(n);
    }

    // animación de intervalo de pasar las diapositivas cada 4.5s
    var automatico = setInterval(siguiente,4500);
    var espera;

    //función que pausa el pase automático si el usuario interactua y lo vuelve a continuar pasados 5s
    function pausar(){
        clearInterval(automatico);
        clearTimeout(espera);
        espera = setTimeout(function(){
            automatico = setInterval (siguiente,4500);
        },5000);
    }
    
    //evento de botones (las flechas) cuando haces click  en el boton next activas la función siguente ( que se ha creado antes)
    botonNext.on("click", function (){
        siguiente();
        pausar();
    });
    //lo mismo pero con el boton prev y la función anterior, con estos dos eventos también activamos la función pausar
    botonPrev.on("click", function (){
        anterior();
        pausar();
    });

    //evento de click en los puntos le indica $(this).data("index") en que diapositiva se encuentra y activa el circulo que corresponde
    dots.on("click", function (){
        var indiceDestino = $(this).data("index");
        show(indiceDestino)
        pausar();
    });

    //aplicamos la misma función pero para que detecte cuando el usuario desliza en vez del boton (para tablet y movil)
    var startX = 0;
    $(".slider-home").on("touchstart", function(e){
        startX = e.originalEvent.touches[0].clientX
    });
    // e.originalEvent.touches[0].clientX es la coordinada horizontal en la que ha empezado a tocar el dedo y se guarda en la variable startX
    //touchstart se activa en el momento en el que pones el dedo encima

    //var diferencia lo que hace es hacer un calculo entre la posición inicial de tu dedo y la posición final
    //si esta es menor, significa que has arrastrado hacia la izquierda y al reves.
    //por lo que si es menor dice que se active la función anterior y si es mayor se active la funcion siguente
    $(".slider-home").on("touchend", function(e){
        var diferencia = e.originalEvent.changedTouches[0].clientX - startX;
        if (Math.abs(diferencia) < 50) return;
        if(diferencia < 0){
            siguiente();
        }else{
            anterior();
        }
        pausar();
    });

    //Cuenta atrás dinámica hasta el 14 de diciembre

    var dateEnd = new Date("December 14," + new Date().getFullYear() + " 00:00:00").getTime();
    if (Date.now() > dateEnd){
        dateEnd = new Date("December 14," + (new Date().getFullYear() + 1) + " 00:00:00").getTime();
    } // si el 14 de diciembre ya ha pasado se pone para el del año que viene
    function dosDigitos(n){
        return n < 10 ? "0" + n : n;
    }//si el numero es menor que 10 le añade un 0 delante
    function cuentaAtras(){
        var resta = Math.max(0, dateEnd - Date.now());
        var horas = Math.floor(resta / 3600000);
        var minutos = Math.floor((resta % 360000) / 60000);
        var segundos = Math.floor((resta % 60000) / 1000);
        var textoFormat = dosDigitos(horas) + ":" + dosDigitos(minutos) + ":" + dosDigitos(segundos); 
        //indicamos lo que tiene que poner mediante la suma de varianles y texto
        $("#countdown").text(textoFormat);
    }
    cuentaAtras(); //lo pone en marcha
    setInterval(cuentaAtras, 1000); //la función se repite cada segundo (el cálculo)


})

// Instagram carousel igual que el de los productos 
$(document).ready(function(){
    var igContainer = $("#instagram-carousel .instagram-track-wrapper");
    var igBefore = $("#instagram-before");
    var igAfter = $("#instagram-after");

    //desplazar los productos a la izquierda cuando haga click en el boton
    igBefore.on("click", function(){
        var carWidth = $(".instagram-scroll-carousel").outerWidth(true) || 300; 
        var currentScroll = igContainer.scrollLeft();
        var maxScroll = igContainer[0].scrollWidth - igContainer[0].clientWidth

        // si el scroll es menor que 5( los productos) se busca y pone la tarjeta 1 y se deplaza hasta ahí
        if(currentScroll <= 10){
            igContainer.animate({scrollLeft: maxScroll}, 300)
        } else{
            //animación del scroll que dura 0.3s
            igContainer.animate({
             scrollLeft: currentScroll - carWidth
             }, 300)}
    });

    // el mismo procedimiento pero en la izquierda y los productos hacia la derecha
    //al hacer click calcula el ancho de una tarjeta para saber cuanto tene que desplazarse y revisa en donde se encuentra el scroll
    igAfter.on("click", function(){
        var carWidth = $(".instagram-scroll-carousel").outerWidth(true) || 300;
        var currentScroll = igContainer.scrollLeft();
        var maxScroll = igContainer[0].scrollWidth - igContainer[0].clientWidth;

        if(currentScroll >= maxScroll - 10){
            igContainer.animate({scrollLeft: 0}, 300);
        }else{
            igContainer.animate({
                scrollLeft: currentScroll + carWidth
            }, 300);
        }
        
    })
})