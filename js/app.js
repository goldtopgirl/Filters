
$(document).ready(function() {
  var red = [
      {q: 'This is question 1'},
      {q: 'This is question 2'},
      {q: 'This is question 3'},
      {q: 'This is question 4'},
  ];

  var i = Math.floor((Math.random()*red.length));

   $('div.button.red-emotion').on('click', function() {
       $('div.button.red-emotion').text(red[i].q);
       
   }); 

  var white = [
      {q: 'This is question 1'},
      {q: 'This is question 2'},
      {q: 'This is question 3'},
      {q: 'This is question 4'},
  ];

  var i = Math.floor((Math.random()*white.length));

  $('div.button.white-fact p').html(white[i].q);
});





