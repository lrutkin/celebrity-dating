$(document).ready(function(){
  $('form#soulmate').submit(function(event) {
    const color = $('select#color').val();
    const season = $('select#season').val();
    const numerology = parseInt($('input#numerology').val());
    const zodiac = parseInt($('select#zodiac').val());

  if (color === 'yellow' || 'blue') && (season==='winter' || 'spring') && (zodiac>=6) {
  //  let result= 'beyonce';
    $('#beyonce').text(result);
    $('#result').show();
  } if else {
    // let result = 'harry';
      $('#harry').text(result);
      $('#result').show();
  } else {
    alert('Please complete the survey!')
  }

  event.preventDefault();
  });
});