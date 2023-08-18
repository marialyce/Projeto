/*var main = function(){
    "use strict";
    window.alert("SEJA BEM-VINDO!");
};
$(document).ready(main);*/
var main = function(){
    "use script";
    var addComentario = function(){
        var $novo_comentario;
        if($(".comment-input input").val() !== ""){
            $novo_comentario =
            $("<p>").text($(".comment-input input").val());
            $(".comments").append($novo_comentario);
        }
    };
    $(".comment-input button").on("click", function(event){
        addComentario();
    });
    $(".comment-input input").on("keypress", function(event){
        if(event.keyCode === 13){
            addComentario();
        }
    });
    /*$(".comment-input input").on("keypress", function(event){
        console.log("Esse é um KeyCode" + event.keyCode);
        addComentario();
    });*/
};
$(document).ready(main);
