$(document).ready(function() {
  $("form#insurance").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    if (age >= 16) {
      var quote = (100 - age) * 3;
      if (gender === 'male' && age < 26) {
        quote += 50;
      }
      $("#rate").empty().append(quote);
      $("#quote").show();
    } else {
      alert("Please enter a valid age");
    }

    event.preventDefault();
  });
});
