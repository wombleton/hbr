fs     = require 'fs'
{exec} = require 'child_process'

appname = 'hbr'

files = [
  'app'
  'views/players'
  'views/roller'
  'views/word-count'
  'views/story'
  'views/word'
  'views/main'
]

task 'build', 'Build single application file from source files', ->
  appContents = new Array remaining = files.length
  for file, index in files then do (file, index) ->
    fs.readFile "js/#{file}.coffee", 'utf8', (err, fileContents) ->
      throw err if err
      appContents[index] = fileContents
      process() if --remaining is 0
  process = ->
    fs.writeFile "js/#{appname}.coffee", appContents.join('\n\n'), 'utf8', (err) ->
      throw err if err
      exec "coffee -c -o www/js js/#{appname}.coffee", (err, stdout, stderr) ->
        throw err if err
        console.log stdout + stderr
        exec "uglifyjs -o www/js/#{appname}.min.js www/js/#{appname}.js", (err, stdout, stderr) ->
          throw err if err
          console.log stdout + stderr
          console.log 'Done.'
        fs.unlink "js/#{appname}.coffee", (err) ->
          throw err if err
