$(document).ready(function(){
    AOS.init({
        duration:1000
    })

    $("#login-form, #register-form").on("submit", function(e){
        e.preventDefault();
        const email = $(this).find('input[type="email"]').val();
        if (!email.includes("@") || !email.includes(".")){
            alert("Please, introduce a valid email.");
        }else{
            alert ("Welcome!");
            window.location.href = "index.html";
        }
    });
    $("input").on("input", function(){
        $(this).css("border-color", "transparent");
    })
});