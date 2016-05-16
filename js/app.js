$(document).ready(function() {
  $(".ryu").mouseenter(function() {
    /* alert("mouse entered .ryu div"); */
    $(".ryu-still").hide();
    $(".ryu-ready").show();
  })

  .mouseleave(function() {
    $(".ryu-ready").hide();
    $(".ryu-still").show();
  })

  .mousedown(function() {
    playHadouken();
    $(".ryu-ready").hide();
    $(".ryu-throwing").show();
    $(".hadouken").finish().show().animate (
      {"left": "1040px"},
      500,
      function() {
        $(this).hide();
        $(this).css("left", "540px");
      }
    )
  })

  .mouseup(function() {
    console.log("mouseup");
    $(".ryu-throwing").hide();
    $(".ryu-ready").show();
    // ryu goes back to his ready position
  });
});

function playHadouken () {
  $("#hadouken-sound")[0].volume = 0.5;
  $("#hadouken-sound")[0].load();
  $("#hadouken-sound")[0].play();
}
