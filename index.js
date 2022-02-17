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

    activeSidebar()
})

var mini = true;

function toggleSidebar() {
  if (mini) {
    console.log("opening sidebar");
    document.getElementById("mySidebar").style.width = "250px";
    this.mini = false;
  }
   else {
    console.log("closing sidebar");
    document.getElementById("mySidebar").style.width = "55px";
    this.mini = true;
  }
}

function activeSidebar() {
    const anchors = document.querySelectorAll(".sidebar a")
    window.addEventListener("scroll", function(){
        anchors.forEach(function(anchor) {
            console.log(anchor)
            if (anchor.hash !== '#top') {
                let section = document.querySelector(anchor.hash)
                if (section.offsetTop - window.scrollY < 20) {
                    anchor.classList.add("active")
                    console.log(anchor)
                }
                else {
                    anchor.classList.remove("active")
                }
            }
            else if (anchor.hash === '#top') {
                let section = document.querySelector('#bottom')
                if (section.offsetTop - window.scrollY < 20) {
                    anchor.classList.add("active")
                    console.log(anchor)
                }
                else {
                    anchor.classList.remove("active")
                }
            }
        })    

    })
}


