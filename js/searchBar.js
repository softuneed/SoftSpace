$("body").on("keyup", "#filter-input", function () {
   var searchText =
      $("#filter-input")
      .val()
      .toLowerCase() || "___";
   $("#container > a").each(function (i) {
      var elem = $(this);
      if (
         elem
         .html()
         .toLowerCase()
         .indexOf(searchText) === -1
      ) {
         elem.addClass("hidden");
      } else {
         elem.removeClass("hidden");
      }
   });
});