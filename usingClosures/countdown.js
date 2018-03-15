var countdownGenerator = function (x) {
  var time = x;
  return function() {
    var output = "T-minus " + x + "...";
    if(x > 0) {
      console.log(output);
    } else if (x === 0) {
      console.log("Blast Off!");
    } else {
      console.log("Rockets already gone, bub!");
    }
    x--;
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!