var userNum, checkNum;

var range = function(input){
  for (var i = 0; i <= input; i++){
    checkNum = i.toString();
    if (checkNum.match(/[3]/gi)){
      $("#result").append("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (checkNum.match(/[2]/gi)){
      $("#result").append("Boop!");
    } else if (checkNum.match(/[1]/gi)){
      $("#result").append("Beep!");
    } else {
      $("#result").append(i);
    }
    if (i < input){
      $("#result").append(", ");
    }
  }
}

$(function(){
  $("#initial-number").submit(function(event){
    event.preventDefault();
    $("#result").empty();

    userNum = parseInt($("#initialNumber").val());

    range(userNum);

  });
});
