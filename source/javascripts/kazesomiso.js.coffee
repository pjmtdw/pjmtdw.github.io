$(->
  $('#fuda-examples a').each((i,x)->
    $(x).click(->
      xx = $(x)
      img = xx.find("img")
      src = xx.attr("href")
      [width,height] = (img.attr(i)*2 for i in ["width","height"])
      $("<div><img class='simplemodal-close' src='#{src}' width='#{width}' height='#{height}'></div>").modal({overlayClose:true})
      false
    )
  )
)
