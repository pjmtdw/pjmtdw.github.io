(function() {
  $(function() {
    return $('#fuda-examples a').each(function(i, x) {
      return $(x).click(function() {
        $("<div><img class='simplemodal-close' src='" + ($(x).attr("href")) + "'></div>").modal({
          overlayClose: true
        });
        return false;
      });
    });
  });

}).call(this);
