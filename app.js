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
};
$(document).ready(main);
