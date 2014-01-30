(function() {
  $(function() {
    return $('#fuda-examples a').each(function(i, x) {
      return $(x).click(function() {
        var height, img, src, width, xx, _ref;
        xx = $(x);
        img = xx.find("img");
        src = xx.attr("href");
        _ref = (function() {
          var _i, _len, _ref, _results;
          _ref = ["width", "height"];
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            i = _ref[_i];
            _results.push(img.attr(i) * 2);
          }
          return _results;
        })(), width = _ref[0], height = _ref[1];
        $("<div><img class='simplemodal-close' src='" + src + "' width='" + width + "' height='" + height + "'></div>").modal({
          overlayClose: true
        });
        return false;
      });
    });
  });

}).call(this);
