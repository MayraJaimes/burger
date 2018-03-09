$(function() {
    $(".updburger").on("click", function(event) {
      var id = $(this).data("id");
      var devour = true;
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devour
      }).then(
        function() {
          console.log("changed devoured to", devour);
          location.reload();
        }
      );
    });
  
    $("#addBurger").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burger").val().trim(),
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  });
  