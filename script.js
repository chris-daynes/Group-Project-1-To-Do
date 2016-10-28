$(document).ready(function() {

  $('.pull-me').click(function(event) {
    $(event.target).children().slideToggle('slow');
    // console.log(event.target)
    // $(event.target).slideToggle('slow');
    // console.log(event.target)
  });
});
