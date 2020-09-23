function getIt(){
  $("p").on("click",function(){
    alert("Hey!")
  })
}

function frameIt(){
  $("img").on("load",$("img").addClass("tasty"))
}

function pressIt(){
  $("input").on()
}

function submitIt(){
  
}

$(document).ready(function(){
  getIt()
  frameIt()
  pressIt()
  submitIt()
});
