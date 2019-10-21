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

  // Event listener for clicking radio button or checkbox
  $('.custom').on('click', function(evt) {
    let input = $(this).children('input');
    if (input.is(':checked')) {
      // If checked, uncheck it
      input.prop('checked', false);
    } else {
      // If unchecked, check it
      input.prop('checked', true);
    }
  });

  // Event listener for reset button
  $('#reset').on('click', function(evt) {
    $('.rating-circle').removeClass('rating-selected');
  });
});
