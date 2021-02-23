$(document).ready( function() {
    $('div').on('click','div', function() {
      if ($(this).hasClass('nonogramNode')) {
        $(this).toggleClass('checked')
      } else if ($(this).hasClass('checked')) {
        $(this).toggleClass('checkedOff')
      } else {
        $(this).toggleClass('nonogramNode')
      }
    })
  })