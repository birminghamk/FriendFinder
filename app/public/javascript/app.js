$(function() {
  // Form validation
  function validateForm() {
    var isValid = true;
    $(".form-control").each(function() {
      if ($(this).val() === "") {
        isValid = false;
      }
    });

    $(".chosen-select").each(function() {
      if ($(this).val() === "") {
        isValid = false;
      }
    })
    return isValid;
  }

  // grabs answers from questions
  $("#submit").on("click", function(event) {

    event.preventDefault();

    // If all required fields are filled
    if (validateForm()) {
      // Create an object for the user"s data
      var userData = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        scores: [
          $("#q1").val(),
          $("#q2").val(),
          $("#q3").val(),
          $("#q4").val(),
          $("#q5").val(),
          $("#q6").val(),
          $("#q7").val(),
          $("#q8").val(),
          $("#q9").val(),
          $("#q10").val()
        ]
      };
      // AJAX post the data to the friends API.
      $.ajax({
        url: "api/friends",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(userData)
      }).then(function(data) {
        // Grab the result from the AJAX post so that the best match's name and photo are displayed.
        $("#match-name").text(data.name);
        $("#match-img").attr("src", data.photo);
        $(".modal").modal("show");
      });
    } else {
      alert("Please fill out all fields before submitting!");

      }
    
  });

});