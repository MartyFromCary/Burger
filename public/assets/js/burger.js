$(() => {
  $(".devour").on("click", function(event) {
    event.preventDefault();
    $.ajax("/", {
      type: "PUT",
      data: {
        id: $(this).data("id")
      }
    }).then(() => location.reload());
  });

  $("#new_burger").on("click", function(event) {
    event.preventDefault();
    $.ajax("/", {
      type: "POST",
      data: {
        burger_name: $("input.new_burger")
          .val()
          .trim()
      }
    }).then(() => location.reload());
  });
});
