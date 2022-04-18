$(document).ready(function (){
    const windowHeight = $(window).height();
    $("#names-panel").css({height: windowHeight}); //set height to names panel

    for (let i = 2; i <= 10; i++){
        $("#class-select-area").append(`<option>${i}</option>`); // adding classes to <select>
    }

    $("#send-button").click(function (){

    });
});