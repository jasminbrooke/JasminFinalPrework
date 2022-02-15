document.addEventListener("DOMContentLoaded", function(){
    const birdCall = document.createElement("AUDIO");
    const cardinal = document.getElementById("cardinal-audio");
    cardinal.addEventListener("click", function() {
        birdCall.setAttribute("src", "./assets/cardinals.wav");
        birdCall.play();
    });
    const bluejay = document.getElementById("blue-jay-audio");
    bluejay.addEventListener("click", function() {
        birdCall.setAttribute("src", "./assets/blue-jays-trimmed.mp3");
        birdCall.play();
    });
    const downy = document.getElementById("downy-audio");
    downy.addEventListener("click", function() {
        birdCall.setAttribute("src", "./assets/downy.flac");
        birdCall.play();
    });
    const hawk = document.getElementById("hawk-audio");
    hawk.addEventListener("click", function() {
        birdCall.setAttribute("src", "./assets/red-tailed-hawk.wav");
        birdCall.play();
    });
    const hoodie = document.getElementById("hoodie-audio");
    hoodie.addEventListener("click", function() {
        birdCall.setAttribute("src", "./assets/hooded-merganser.mp3");
        birdCall.play();
    });

})
