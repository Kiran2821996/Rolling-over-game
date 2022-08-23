var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    character.classList.add("dd");
    setTimeout(function(){
        character.classList.remove("animate");
        character.classList.remove("dd");
    },300);
}
setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<110 && blockLeft>90 && characterTop>=140){
        block.style.animation = "none";
      
        alert(`        Game Over. 
        score: ${Math.floor(counter/100)} 
        Please try again`);
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);