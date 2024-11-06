$(document).ready(function () {
  // Scroll to top button ----------------------------------------------------------
  window.onscroll = function () {
    if (
      document.body.scrollTop > 350 ||
      document.documentElement.scrollTop > 350
    ) {
      $("#topper").show();
    } else {
      $("#topper").hide();
    }
  };

  // Scroll to top functionality
  $("#topper").on("click", function () {
    $("html").animate({ scrollTop: 0 }, 400);
  });

  // Generic function to toggle abstract visibility
  function toggleAbstract(buttonId, abstractId) {
    $(buttonId).click(function () {
      $(abstractId).toggle(); // Toggles the visibility of the abstract
      $(this).text(
        $(abstractId).is(":visible") ? "Hide Abstract" : "View Abstract"
      );
    });
  }

  // Apply the toggle function to each abstract
  toggleAbstract("#abstractButton1", "#read-more1");
  toggleAbstract("#abstractButton2", "#read-more2");
  toggleAbstract("#abstractButton3", "#read-more3");
  toggleAbstract("#abstractButton4", "#read-more4");
  toggleAbstract("#abstractButton5", "#read-more5");
  toggleAbstract("#abstractButton6", "#read-more6");
});

// Expander to show/hide all accordion panels
$(".expander").on("click", function () {
  const expand = $(".expander").text() === "show all";
  $(".expander").text(expand ? "hide all" : "show all");
  $(".panel-collapse").collapse(expand ? "show" : "hide");
});
