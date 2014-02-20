$(->
  if $(window).width() <  $(".author").offset().left + $(".author").width()
    $(".author").each((i,x)->
      xx = $(x)
      xx.parent().find(".simonoku").parent().append("<div style='text-align: center;color: #330000;'>("+xx.html()+")</div>")
      xx.remove()
    )
)
