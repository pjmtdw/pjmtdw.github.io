$(->
  if $(window).width() <  $(".author").offset().left + $(".author").width()
    $(".author").each((i,x)->
      xx = $(x)
      yomiku = xx.parent().find(".simonoku").parent()
      yomiku.append("<div style='text-align: center;color: #330000;'>("+xx.html()+")</div>")
      fn = xx.parent().find(".fudanum")
      yomiku.prepend("<div style=';color: maroon;font-size: 0.8em'>["+fn.html()+"]</div>")
      fn.remove()
      xx.remove()
    )
)
