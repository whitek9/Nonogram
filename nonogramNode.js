$(document).ready( function() {
    
  $('#nonogramNode').on('click', function() {
      
    if ($(this).hasClass('unChecked')) {
      $(this).removeClass('unChecked').addClass('checkedOn')
    
    } else if ($(this).hasClass('checkedOn')) {
      $(this).removeClass('checkedOn').addClass('checkedOff')
    
    } else {
      $(this).removeClass('checkedOff').addClass('unChecked')
    }
  })
})