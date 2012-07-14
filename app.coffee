express = require('express')
app = express.createServer()

port = process.env.PORT or 3000

app.configure('production', ->
  app.use(express.errorHandler())
)

app.configure('development', ->
  app.use(express.errorHandler(
    dumpExceptions: true
    showStack: true
  ))
)

app.configure(->
  app.set('views', "#{__dirname}/views")
  app.set('view engine', 'jade')
  app.use express.logger()
  app.use(express.bodyParser())
  app.use(express.methodOverride())
  app.use(express.static("#{__dirname}/static"))
  app.use(require('connect-assets')())
)

app.get('/', (req, res) ->
  res.render('index',
    layout: null
  )
)

module.exports.app = app

app.listen(port) unless app.settings.env is 'TEST'
console.log('hbr server listening on port %d in %s mode', app.address().port, app.settings.env)
