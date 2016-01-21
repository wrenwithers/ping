var pingPong = function(userGiven) {
  for(var i=1; i<=11; i++) {
    if (i % 15 === 0){
      $(window.document.write("ping-pong" + "...."));
    } else if (i % 5 === 0){
       $(window.document.write("pong" + "...."));
    } else if (i % 3 === 0){
       $(window.document.write("ping" + "...."));
    } else {
     window.document.write(i + "....");


  }
}
}
