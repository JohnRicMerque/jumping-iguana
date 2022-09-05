var character = document.getElementsByClassName("iguana")[0];
var block = document.getElementsByClassName("bloxk");

function jump(){
    character.classList.add("jump")
    setTimeout(function(){
        character.classList.remove("jump")
    }, 1200)
}