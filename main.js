// saat tombol play fi click
$('#play_button').on('click', function() {
  $('#play_button').css("display", "none");
  $('#pause_button').css("display", "block");
  var x = document.getElementById("myAudio");
  x.play();
});
// saat tombol pause di click
$('#pause_button').on('click', function() {
  $('#pause_button').css("display", "none");
  $('#play_button').css("display", "block");
  var x = document.getElementById("myAudio");
  x.pause();
});