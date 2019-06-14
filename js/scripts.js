var userNum, checkNum;
var halImages = 0;

var range = function(input){
  for (var i = 0; i <= input; i++){
    checkNum = i.toString();
    if (checkNum.match(/[3]/gi)){
      $("#result").append('<span class="num3">I\'m sorry, Dave. I\'m afraid I can\'t do that.</span>');
      halImages++;
    } else if (checkNum.match(/[2]/gi)){
      $("#result").append('<span class="num2">Boop!</span>');
    } else if (checkNum.match(/[1]/gi)){
      $("#result").append('<span class="num1">Beep!</span>');
    } else {
      $("#result").append(i);
    }
    if (i < input){
      $("#result").append(", ");
    }
  }
}

var randomHal = function(){
    var canvas = document.querySelector('#halImg');
    var hal_template = document.querySelector('#hal');
    var hal_width = 3;
    var hal_height = 3;

    var max_height = canvas.offsetHeight - hal_height;
    var max_width = canvas.offsetWidth - hal_width;
    var randomCoordinate = function(){
        var r = [];
        var x = Math.floor( Math.random() * max_width );
        var y = Math.floor( Math.random() * max_height );
        r = [x,y];
        return r;
    };
    var createImage = function(){
        var node = hal_template.cloneNode(true);
        var xy = randomCoordinate();
        node.removeAttribute('id');
        node.removeAttribute('hidden');
        node.style.top = xy[1] + 'px';
        node.style.left = xy[0] + 'px';
        node.setAttribute('src',"img/hal.png");
        canvas.appendChild(node);
    };
    for (var i=0;i<halImages;i++){
        createImage();
    };
};

$(function(){
  $("#initial-number").submit(function(event){
    event.preventDefault();
    document.addEventListener("submit", randomHal);

    $("#result").empty();
    $("#halImg").empty();
    halImages = 0;

    userNum = parseInt($("#initialNumber").val());

    range(userNum);
  });
});
