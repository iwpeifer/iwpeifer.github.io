$(document).ready(function() {
  $('#pic').hide()
  displayAbout()
})

function displayAbout(){
  let about = '<p>Isaac Peifer is a full stack web developer living in Brooklyn. When not tinkering with the internet, he is likely to be found reading a book, climbing a wall of moulded plastic rocks, or riding his bike.</p>'
  $('.about').click(function(){
    $('#pic').show()
    $('#content').html($(about).typewrite({
        'delay': 50, //time in ms between each letter
        'extra_char': '🦑', //"cursor" character to append after each display
        'trim': true, // Trim the string to type (Default: false, does not trim)
        'callback': function(){
          $('#pic').show()
        }
    }))
  })
}

$('.typewriter').typewrite({
    'delay': 100, //time in ms between each letter
    'extra_char': '|', //"cursor" character to append after each display
    'trim': true, // Trim the string to type (Default: false, does not trim)
    'callback': null // if exists, called after all effects have finished
});
//
//     var msg = new SpeechSynthesisUtterance(`fuck u lol`);
//   msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'Friend'; })[0];
//   speechSynthesis.speak(msg);
//   })
// }
