###
GET /
###

exports.index = (req, res) ->
  res.render('index',
    title: 'Happy Birthday, Robot!'
  )
