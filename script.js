var character = document.getElementsByClassName("iguana")[0];
var block = document.getElementsByClassName("block")[0];


function jump(){
    // adds class with CSS animation if it has not been added to avoid spamming jump
    if (character.classList != "jump") {
        character.classList.add("jump");
    }
    
    // removes class after a certain time (1100) to enable reuse of animation after click
    setTimeout(function(){ 
        character.classList.remove("jump");
    }, 1100);
}

var checkInContact = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character) .getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block) .getPropertyValue("left"));
    var charWidth = parseInt(getComputedStyle(document.documentElement) .getPropertyValue("--character-width"));
    var jumpHeightFromTop = parseInt(getComputedStyle(document.documentElement) .getPropertyValue(" --jump-top-height"));

    if (blockLeft < charWidth && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("You Lose")
    }
}, 10);