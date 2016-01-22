$(document).ready(function() {
  $("#query form").submit(function(event) {
    var query = ["q1"];
    var text = "";

    query.forEach(function(query) {
    var userInput = $("input#" + query).val();
      $(query).text(userInput);


    for(var i=1; i<=userInput; i++) {
      if (i % 15 === 0){
        text+="ping-pong....";
      } else if (i % 5 === 0){
         text+="pong....";
      } else if (i % 3 === 0){
         text+="ping....";
      } else {
         text+= i + "....";




         event.preventDefault();
    }
  }
  document.getElementById("test").innerHTML = text
 })
})
});
