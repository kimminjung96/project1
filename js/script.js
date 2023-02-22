document.querySelector("#layer button").addEventListener("click",function(){
    document.querySelector("#layer").style.display="none"

})
$( function() {
    $( "#layer" ).draggable();
  } );