$(document).ready(function() {
  $('#pic').hide()
  $('#pic').draggable()
  $('#content').draggable()
  $('li').draggable()
  $('p').draggable()
  $('h2').draggable()
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
