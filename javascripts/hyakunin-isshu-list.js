(function() {
  $(function() {
    if ($(window).width() < $(".author").offset().left + $(".author").width()) {
      return $(".author").each(function(i, x) {
        var fn, xx, yomiku;
        xx = $(x);
        yomiku = xx.parent().find(".simonoku").parent();
        yomiku.append("<div style='text-align: center;color: #330000;'>(" + xx.html() + ")</div>");
        fn = xx.parent().find(".fudanum");
        yomiku.prepend("<div style=';color: maroon;font-size: 0.8em'>[" + fn.html() + "]</div>");
        fn.remove();
        return xx.remove();
      });
    }
  });

}).call(this);
