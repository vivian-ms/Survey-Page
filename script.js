$(function() {
  // Event listener for form submit
  $('#survey-form').on('submit', function(evt) {
    // Prevent form from submitting
    evt.preventDefault();
    alert('Thank you for your feedback!');
  });
});
