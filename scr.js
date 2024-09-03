//
let color =['red','green','blue','yellow'];
//
let level = 0;
//
let colorSequences =[];
//
let clickPattern = [];
//
function nextSequences (){
//
    var randomNumber = Math.floor(Math.random() * 4);
//
    var randomChoosenColor = color[randomNumber];
//
    colorSequences.push(randomChoosenColor);
//  
    $("#"+ randomChoosenColor).fadeOut(100).fadeIn(100);
//    
    playSound(randomChoosenColor);
//    
    console.log("next color :" + randomChoosenColor)
//    
    console.log(colorSequences);
//
    $("#level-title").text("Level "+ level);
//
    level++;
//
    clickPattern = [];
}
//
function playSound(name){
//  
    var audio = new Audio ("sounds/" + name + ".mp3");
//  
    audio.play();
}
//
    function animatedPress(currentColor) {  
// 
       $("." + currentColor).addClass("pressed");
//        
        setTimeout(() => {
            $("." + currentColor).removeClass("pressed");
        }, 100);
    }
//
    function startGame(){
    nextSequences();
    }
//
    function checkAnswer(currentLevel){
//
        if(clickPattern[currentLevel]=== colorSequences[currentLevel]){
            console.log("Succes");
            //
            if(currentLevel === colorSequences.length - 1){
                setTimeout(()=>{
                    nextSequences();
                }, 1000);
            }
            //
        }else{
            console.log("Wrong");
            //
            $("body").addClass("game-over");
//
            setTimeout(() => {
                $("body").removeClass("game-over");
            }, 200);
//        
            $("#level-title").text("Game Over, Refresh");
//        
            startOver();
        }
    }
//
    function startOver() { 
        level =0;
        colorSequences = [];
        clickPattern = [];
     }
//
        $("#start-button").click(function(){
            startGame();
        });
//
        $(".btn").click(function (e) { 
            var userChoosenColor = e.target.id;
            //
            clickPattern.push(userChoosenColor);
            //
            console.log(clickPattern);
            //            
            playSound(userChoosenColor);
            //
            animatedPress(userChoosenColor);
            //
            checkAnswer(clickPattern.length-1);
        });
