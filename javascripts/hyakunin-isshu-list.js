(function() {
  var WIKIPEDIA, WIKIPEDIA_AUTHOR, pad;

  pad = function(n, width) {
    n = n + '';
    if (n.length >= width) {
      return n;
    } else {
      return new Array(width - n.length + 1).join('0') + n;
    }
  };

  $(function() {
    if ($(window).width() < $(".author").offset().left + $(".author").width()) {
      $(".author").each(function(i, x) {
        var fn, xx, yomiku;
        xx = $(x);
        yomiku = xx.parent().find(".simonoku").parent();
        yomiku.append("<div class='author'><div>(" + (xx.children().html()) + ")</div></div>");
        fn = xx.parent().find(".fudanum");
        yomiku.prepend("<div class='fudanum-small'>[" + (fn.html()) + "]</div>");
        fn.remove();
        return xx.remove();
      });
    } else {

    }
    return $('#list100 tr').each(function(i, x) {
      var author_href, poem_href, _ref;
      _ref = i === 0 ? [WIKIPEDIA + WIKIPEDIA_AUTHOR[i], WIKIPEDIA + "%E9%9B%A3%E6%B3%A2%E6%B4%A5_%28%E5%92%8C%E6%AD%8C%29"] : [WIKIPEDIA + WIKIPEDIA_AUTHOR[i], "http://www.ogurasansou.co.jp/site/hyakunin/" + (pad(i, 3)) + ".html"], author_href = _ref[0], poem_href = _ref[1];
      $(x).find('.author').children().wrap("<a href='" + author_href + "'>");
      return $(x).find('.kaminoku,.simonoku').wrapAll("<a href='" + poem_href + "'>");
    });
  });

  WIKIPEDIA = "http://ja.wikipedia.org/wiki/";

  WIKIPEDIA_AUTHOR = ["%E7%8E%8B%E4%BB%81", "%E5%A4%A9%E6%99%BA%E5%A4%A9%E7%9A%87", "%E6%8C%81%E7%B5%B1%E5%A4%A9%E7%9A%87", "%E6%9F%BF%E6%9C%AC%E4%BA%BA%E9%BA%BB%E5%91%82", "%E5%B1%B1%E9%83%A8%E8%B5%A4%E4%BA%BA", "%E7%8C%BF%E4%B8%B8%E5%A4%A7%E5%A4%AB", "%E5%A4%A7%E4%BC%B4%E5%AE%B6%E6%8C%81", "%E9%98%BF%E5%80%8D%E4%BB%B2%E9%BA%BB%E5%91%82", "%E5%96%9C%E6%92%B0%E6%B3%95%E5%B8%AB", "%E5%B0%8F%E9%87%8E%E5%B0%8F%E7%94%BA", "%E8%9D%89%E4%B8%B8", "%E5%B0%8F%E9%87%8E%E7%AF%81", "%E9%81%8D%E6%98%AD", "%E9%99%BD%E6%88%90%E5%A4%A9%E7%9A%87", "%E6%BA%90%E8%9E%8D", "%E5%85%89%E5%AD%9D%E5%A4%A9%E7%9A%87", "%E5%9C%A8%E5%8E%9F%E8%A1%8C%E5%B9%B3", "%E5%9C%A8%E5%8E%9F%E6%A5%AD%E5%B9%B3", "%E8%97%A4%E5%8E%9F%E6%95%8F%E8%A1%8C", "%E4%BC%8A%E5%8B%A2_(%E6%AD%8C%E4%BA%BA)", "%E5%85%83%E8%89%AF%E8%A6%AA%E7%8E%8B", "%E7%B4%A0%E6%80%A7", "%E6%96%87%E5%B1%8B%E5%BA%B7%E7%A7%80", "%E5%A4%A7%E6%B1%9F%E5%8D%83%E9%87%8C_(%E6%AD%8C%E4%BA%BA)", "%E8%8F%85%E5%8E%9F%E9%81%93%E7%9C%9F", "%E8%97%A4%E5%8E%9F%E5%AE%9A%E6%96%B9", "%E8%97%A4%E5%8E%9F%E5%BF%A0%E5%B9%B3", "%E8%97%A4%E5%8E%9F%E5%85%BC%E8%BC%94", "%E6%BA%90%E5%AE%97%E4%BA%8E", "%E5%87%A1%E6%B2%B3%E5%86%85%E8%BA%AC%E6%81%92", "%E5%A3%AC%E7%94%9F%E5%BF%A0%E5%B2%91", "%E5%9D%82%E4%B8%8A%E6%98%AF%E5%89%87", "%E6%98%A5%E9%81%93%E5%88%97%E6%A8%B9", "%E7%B4%80%E5%8F%8B%E5%89%87", "%E8%97%A4%E5%8E%9F%E8%88%88%E9%A2%A8", "%E7%B4%80%E8%B2%AB%E4%B9%8B", "%E6%B8%85%E5%8E%9F%E6%B7%B1%E9%A4%8A%E7%88%B6", "%E6%96%87%E5%B1%8B%E6%9C%9D%E5%BA%B7", "%E5%8F%B3%E8%BF%91_(%E6%AD%8C%E4%BA%BA)", "%E6%BA%90%E7%AD%89", "%E5%B9%B3%E5%85%BC%E7%9B%9B", "%E5%A3%AC%E7%94%9F%E5%BF%A0%E8%A6%8B", "%E6%B8%85%E5%8E%9F%E5%85%83%E8%BC%94", "%E8%97%A4%E5%8E%9F%E6%95%A6%E5%BF%A0", "%E8%97%A4%E5%8E%9F%E6%9C%9D%E5%BF%A0", "%E8%97%A4%E5%8E%9F%E4%BC%8A%E5%B0%B9", "%E6%9B%BD%E7%A6%B0%E5%A5%BD%E5%BF%A0", "%E6%81%B5%E6%85%B6", "%E6%BA%90%E9%87%8D%E4%B9%8B", "%E5%A4%A7%E4%B8%AD%E8%87%A3%E8%83%BD%E5%AE%A3", "%E8%97%A4%E5%8E%9F%E7%BE%A9%E5%AD%9D", "%E8%97%A4%E5%8E%9F%E5%AE%9F%E6%96%B9", "%E8%97%A4%E5%8E%9F%E9%81%93%E4%BF%A1", "%E8%97%A4%E5%8E%9F%E9%81%93%E7%B6%B1%E6%AF%8D", "%E9%AB%98%E9%9A%8E%E8%B2%B4%E5%AD%90", "%E8%97%A4%E5%8E%9F%E5%85%AC%E4%BB%BB", "%E5%92%8C%E6%B3%89%E5%BC%8F%E9%83%A8", "%E7%B4%AB%E5%BC%8F%E9%83%A8", "%E5%A4%A7%E5%BC%90%E4%B8%89%E4%BD%8D", "%E8%B5%A4%E6%9F%93%E8%A1%9B%E9%96%80", "%E5%B0%8F%E5%BC%8F%E9%83%A8%E5%86%85%E4%BE%8D", "%E4%BC%8A%E5%8B%A2%E5%A4%A7%E8%BC%94", "%E6%B8%85%E5%B0%91%E7%B4%8D%E8%A8%80", "%E8%97%A4%E5%8E%9F%E9%81%93%E9%9B%85", "%E8%97%A4%E5%8E%9F%E5%AE%9A%E9%A0%BC", "%E7%9B%B8%E6%A8%A1_(%E6%AD%8C%E4%BA%BA)", "%E8%A1%8C%E5%B0%8A", "%E5%91%A8%E9%98%B2%E5%86%85%E4%BE%8D", "%E4%B8%89%E6%9D%A1%E5%A4%A9%E7%9A%87", "%E8%83%BD%E5%9B%A0", "%E8%89%AF%E6%9A%B9", "%E6%BA%90%E7%B5%8C%E4%BF%A1", "%E7%A5%90%E5%AD%90%E5%86%85%E8%A6%AA%E7%8E%8B%E5%AE%B6%E7%B4%80%E4%BC%8A", "%E5%A4%A7%E6%B1%9F%E5%8C%A1%E6%88%BF", "%E6%BA%90%E4%BF%8A%E9%A0%BC", "%E8%97%A4%E5%8E%9F%E5%9F%BA%E4%BF%8A", "%E8%97%A4%E5%8E%9F%E5%BF%A0%E9%80%9A", "%E5%B4%87%E5%BE%B3%E5%A4%A9%E7%9A%87", "%E6%BA%90%E5%85%BC%E6%98%8C", "%E8%97%A4%E5%8E%9F%E9%A1%95%E8%BC%94", "%E5%BE%85%E8%B3%A2%E9%96%80%E9%99%A2%E5%A0%80%E6%B2%B3", "%E5%BE%B3%E5%A4%A7%E5%AF%BA%E5%AE%9F%E5%AE%9A", "%E8%97%A4%E5%8E%9F%E6%95%A6%E9%A0%BC", "%E8%97%A4%E5%8E%9F%E4%BF%8A%E6%88%90", "%E8%97%A4%E5%8E%9F%E6%B8%85%E8%BC%94", "%E4%BF%8A%E6%81%B5", "%E8%A5%BF%E8%A1%8C", "%E5%AF%82%E8%93%AE", "%E7%9A%87%E5%98%89%E9%96%80%E9%99%A2%E5%88%A5%E5%BD%93", "%E5%BC%8F%E5%AD%90%E5%86%85%E8%A6%AA%E7%8E%8B", "%E6%AE%B7%E5%AF%8C%E9%96%80%E9%99%A2%E5%A4%A7%E8%BC%94", "%E4%B9%9D%E6%9D%A1%E8%89%AF%E7%B5%8C", "%E4%BA%8C%E6%9D%A1%E9%99%A2%E8%AE%83%E5%B2%90", "%E6%BA%90%E5%AE%9F%E6%9C%9D", "%E9%A3%9B%E9%B3%A5%E4%BA%95%E9%9B%85%E7%B5%8C", "%E6%85%88%E5%86%86", "%E8%A5%BF%E5%9C%92%E5%AF%BA%E5%85%AC%E7%B5%8C", "%E8%97%A4%E5%8E%9F%E5%AE%9A%E5%AE%B6", "%E8%97%A4%E5%8E%9F%E5%AE%B6%E9%9A%86_(%E5%BE%93%E4%BA%8C%E4%BD%8D)", "%E5%BE%8C%E9%B3%A5%E7%BE%BD%E5%A4%A9%E7%9A%87", "%E9%A0%86%E5%BE%B3%E5%A4%A9%E7%9A%87"];

}).call(this);
