$(function() {
  // Event listener for form submit
  $('#survey-form').on('submit', function(evt) {
    evt.preventDefault();  // Prevent form from submitting
    window.scrollTo(0, 0);  // Scroll to top of window
    alert('Thank you for your feedback!');
  });


  // Event listener for clicking stars
  $('#rating').on('click', '.fa' , function(evt) {
    // Remove .fa-star and add .fa-star-o to all stars
    $('.fa').removeClass('fa-star').addClass('fa-star-o');

    // Remove .fa-star-o and add .fa-star to the clicked star and all stars before it
    $(this).removeClass('fa-star-o').addClass('fa-star');
    $(this).prevAll('.fa').addClass('fa-star').removeClass('fa-star-o');
  });


  // Event listener for clicking radio button div
  $('.radio').on('click', function(evt) {
    let input = $(this).children('input');
    input.prop('checked', true);
  });


  // Event listener for clicking checkbox div
  $('.checkbox').on('click', function(evt) {
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
    $('.fa').removeClass('fa-star').addClass('fa-star-o');
    window.scrollTo(0, 0);
  });
});
