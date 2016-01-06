var lefty = 0;
var righty = 0;

$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var answer1 = $("select#q1").val();
    var answer2 = $("select#q2").val();
    var answer3 = $("select#q3").val();
    var answer4 = $("select#q4").val();
    var answer5 = $("select#q5").val();

    if (answer1 === "left") {
      lefty ++;
    } else {
      righty ++;
    };

    if (answer2 === "left") {
      lefty ++;
    } else {
      righty ++;
    };

    if (answer3 === "left") {
      lefty ++;
    } else {
      righty ++;
    };

    if (answer4 === "left") {
      lefty ++;
    } else {
      righty ++;
    };

    if (answer5 === "left") {
      lefty ++;
    } else {
      righty ++;
    };

    if (lefty === 5) {
      alert("Congratulations! You are super left-leaning!");
    } else if (righty === 5) {
      alert("Congratulations! You are super right-leaning!");
    } else if (lefty === 4) {
      alert("Congratulations! You are pretty left-leaning!");
    } else if (righty === 4) {
      alert("Congratulations! You are pretty right-leaning!");
    } else if (lefty === 3) {
      alert("Congratulations! You are kinda left-leaning!");
    } else if (righty === 3) {
      alert("Congratulations! You are kinda right-leaning!");
    } else {
      alert("something went wrong");
    }

    event.preventDefault();
  });
});
