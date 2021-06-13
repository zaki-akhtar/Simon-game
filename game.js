
var buttonColor=["red","blue","green","yellow"];
var gamePattern=[];
var userChoosenPattern=[];

var start=false;
var level=0;
$(document).keypress(function(){
  if(!start){
    $("#level-title").text("Level-"+level);
    nextSequence();
    start=true;
  }
});
function playsound(name){
  var audio= new Audio(name +".mp3");
  audio.play();
}
$(".btn").on("click",function(){

    var userChoosenColor= $(this).attr("id");
    userChoosenPattern.push(userChoosenColor);
    playsound(userChoosenColor);
    animatePress(userChoosenColor);
    checkAnswer(userChoosenPattern.length-1);

});
function checkAnswer(currlevel)
{
  if(gamePattern[currlevel]===userChoosenPattern[currlevel]){
      if(gamePattern.length===userChoosenPattern.length){
        setTimeout(function(){
          nextSequence();
        },1000);
      }
  }
  else{
    playsound("wrong");
       $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");
      setTimeout(function(){
      $("body").removeClass("game-over");
      },200);
    startOver();
  }


}
function nextSequence(){
  userChoosenPattern=[];
  level++;
  $("#level-title").text("Level "+level);
  var randomNumber=Math.floor((Math.random())*4);
  var randomChoosencolor=buttonColor[randomNumber];
  gamePattern.push(randomChoosencolor);
  $("#"+randomChoosencolor).fadeIn(100).fadeOut(100).fadeIn(100);
  playsound(randomChoosencolor);
}
 function animatePress(ccolor){
   $("#"+ccolor).addClass("pressed");
   setTimeout(function(){
     $("#"+ccolor).removeClass("pressed");
   },100);

 }
 function startOver(){
   level=0;
   gamePattern = [];
   start = false;
 }
