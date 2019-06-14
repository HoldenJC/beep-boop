var userNum;

$(function(){
  $("#initial-number").submit(function(event){
    event.preventDefault();
    // resetFormField = "";

    userNum = $("#initialNumber").val();

    $("#result").empty().append(userNum);
  });
});
