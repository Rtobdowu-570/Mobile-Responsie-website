"use strict";

// Animate Smooth Scroll
$('#view-work').on('click', function () {
  var images = $('#images').position().top;
  $('html, body').animate({
    scrollTop: images
  }, 900);
});
//# sourceMappingURL=main.dev.js.map
