let color =['red','green','blue','yellow'];
let level = 1;
let colorSequences =[];
function nextSequences (){
    var randomNumber = Math.floor(Math.random() * 4);

    var randomChoosenColor = color[randomNumber];

    colorSequences.push(randomChoosenColor);

    
    $("#"+ randomChoosenColor).fadeOut(100).fadeIn(100);
    
    playSound(randomChoosenColor);
    console.log("next color :" + randomChoosenColor)
    console.log(colorSequences);
}

function playSound(color){
    var audio = new Audio ("sounds/" + color + ".mp3");
    audio.play();
}
function startGame(){
nextSequences();
}
$("#start-button").click(function(){
    startGame();
})