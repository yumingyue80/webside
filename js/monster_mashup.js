$(document).ready( function() {
var clix = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //index表示部位，数字表示部位对应的初始值
var w = 367;
var m = 9;
lightingOne();
lightingTwo();
lightningThree();

$("#header").click( function() {
  moveMe(0, this);
});
$("#eyes").click( function() {
  moveMe(1, this);
});
$("#noses").click( function() {
  moveMe(2, this);
});
$("#mouth").click( function() {
  moveMe(3, this);
});
function moveMe(i, obj)
{
  if (clix[i] < m)
  {
    $(obj).animate({left:"-=" + w + "px"},500);
    clix[i]++;
  }
  else
  {
    $(obj).animate({left:"0px"},500);
    clix[i] = 0;
  }
}

function getRandom(num)
{
  var num = Math.floor(Math.random()*num);
  return num;
}

$("#Random").click( function() {
  $(".face").each(function(index) {
    var targetPosition = getRandom(m);
    var currentPosition = clix[index];
    clix[index] = targetPosition;  
    if(targetPosition > currentPosition)
    {
      var moveTo = (targetPosition - currentPosition) * w;
      $(this).animate({left:"-=" + moveTo + "px"},500);
    }
    else if(targetPosition < currentPosition)
    { 
      var moveTo = (currentPosition - targetPosition) * w;  
      $(this).animate({left:"+=" + moveTo + "px"},500);
    }
  });
});

$("#Reset").click( function() {
 $(".face").each(function(index) {
    clix[index] = 0;
    $(this).animate({left:"0px"},500);
  });
});

function lightingOne()
{
  setTimeout( function() {
    lightning_one()
    lightingOne();
    },
    4000
  );
}   
function lightingTwo()
{
  setTimeout( function() {
    lightning_two()
    lightingTwo();
    },
    5000
  );
}  
function lightningThree()
{
  setTimeout( function() {
    lightning_three()
    lightningThree();
    },
    6000
  );
}     

function lightning_one()
{
  $("#container #lightning1").fadeIn(250).fadeOut(250);
}
function lightning_two()
{
  $("#container #lightning2").fadeIn(250).fadeOut(250);
}
function lightning_three()
{
  $("#container #lightning3").fadeIn(250).fadeOut(250);
}

});



