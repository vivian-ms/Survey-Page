$(function() {
  // Event listener for form submit
  $('#survey-form').on('submit', function(evt) {
    // Prevent form from submitting
    evt.preventDefault();
    alert('Thank you for your feedback!');
  });

  // Event listener for clicking rating circle
  $('.rating-container').on('click', '.rating-circle' , function(evt) {
    // 1) Remove .rating-selected from all rating circles
    $('.rating-circle').removeClass('rating-selected');

    // 2) Add .rating-selected to the clicked rating circle and all rating circles before it
    $(this).addClass('rating-selected');
    $(this).prevAll('.rating-circle').addClass('rating-selected');
  });

  // Event listener for reset button
  $('#reset').on('click', function(evt) {
    $('.rating-circle').removeClass('rating-selected');
  });
});
