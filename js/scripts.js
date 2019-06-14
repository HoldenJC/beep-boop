var userNum;




var range = function(input){

  for (var i = 0; i <= input; i++){
    $("#result").append(i);

  }

}


$(function(){
  $("#initial-number").submit(function(event){
    event.preventDefault();
    // resetFormField = "";
    $("#result").empty();

    userNum = parseInt($("#initialNumber").val());

    range(userNum);

    // $("#result").empty().append(userNum);
  });
});
