(function() {
  $(function() {
    if ($(window).width() < $(".author").offset().left + $(".author").width()) {
      return $(".author").each(function(i, x) {
        var xx;
        xx = $(x);
        xx.parent().find(".simonoku").parent().append("<div style='text-align: center;color: #330000;'>(" + xx.html() + ")</div>");
        return xx.remove();
      });
    }
  });

}).call(this);
