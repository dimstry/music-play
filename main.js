const x = document.getElementById("myAudio");
// saat tombol play fi click
$('#play_button').on('click', function() {
  $('#play_button').css("display", "none");
  $('#pause_button').css("display", "block");
  x.play();
});
// saat tombol pause di click
$('#pause_button').on('click', function() {
  $('#pause_button').css("display", "none");
  $('#play_button').css("display", "block");
  x.pause();
});
