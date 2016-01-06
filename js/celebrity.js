$(document).ready(function() {
  $("form#info").submit(function(event) {
    var gender = $("select#gender").val();
    var age = $("select#age").val();
    var hair = $("select#hair").val();

    if (gender === "male" && age === "younger" && hair === "blonde") {
      $("#niall").show();
    } else if (gender === "male" && age === "younger" && hair === "brunette") {
      $("#michael").show();
    } else if (gender === 'male' && age === 'younger' && hair === 'red') {
      $("#ed").show();
    } else if (gender === 'male' && age === 'middle' && hair === 'blonde') {
      $("#ryan").show();
    } else if (gender === 'male' && age === 'middle' && hair === 'brunette') {
      $("#joseph").show();
    } else if (gender === 'male' && age === 'middle' && hair === 'red') {
      $("#brett").show();
    } else if (gender === 'male' && age === 'older' && hair === 'blonde') {
      $("#tom").show();
    } else if (gender === 'male' && age === 'older' && hair === 'brunette') {
      $("#brad").show();
    } else if (gender === 'male' && age === 'older' && hair === 'red') {
      $("#danny").show();
    } else if (gender === 'female' && age === 'younger' && hair === 'blonde') {
      $("#jennifer").show();
    } else if (gender === 'female' && age === 'younger' && hair === 'brunette') {
      $("#selena").show();
    } else if (gender === 'female' && age === 'younger' && hair === 'red') {
      $("#emma").show();
    } else if (gender === 'female' && age === 'middle' && hair === 'blonde') {
      $("#britney").show();
    } else if (gender === 'female' && age === 'middle' && hair === 'brunette') {
      $("#mila").show();
    } else if (gender === 'female' && age === 'middle' && hair === 'red') {
      $("#hayley").show();
    } else if (gender === 'female' && age === 'older' && hair === 'blonde') {
      $("#lisa").show();
    } else if (gender === 'female' && age === 'older' && hair === 'brunette') {
      $("#sandra").show();
    } else if (gender === 'female' && age === 'older' && hair === 'red') {
      $("#julianne").show();
    }
    $("#first").hide();
    $("#refresh").show();
    event.preventDefault();
  });
  $("form#refresh").submit(function() {
    location.reload();
  });
});
