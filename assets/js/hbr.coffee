#= require modernizr.min
#= require underscore-1.3.1
#= require underscore.string.min
#= require jquery
#= require jquery.mobile-1.0

Game =
  state:
    storyteller: 0
    players: []
  Start:
    startGame: ->
      count = Number($(@).attr('data-count'))
      Game.Players.initialise(count)
      $.mobile.changePage('#game')
  Players:
    getPlayer: (word) ->
      if word is 'AND'
        offset = 1
      else if word is 'BUT'
        offset = -1
      else
        offset = 0
      index = (Game.state.storyteller + offset) % Game.state.players.length
      index += Game.state.players.length if index < 0
      Game.state.players[index]
    hasOverflow: ->
      Game.Players.getPlayer('BUT').words >= 4 or Game.Players.getPlayer('AND').words >= 4
    addWord: (word) ->
      Game.Players.getPlayer(word).words++
      Game.Players.update()
    update: ->
      html = _.reduce(Game.state.players, (memo, player) ->
        { number, words, coins, role } = player
        memo += """
          <div class="player player_#{number}" data-number="#{number}">
            <div class="words">#{words} words</div>
            <div class="coins">#{coins} coins</div>
          </div>
        """
      , '')
      $('#players').html(html)
    initialise: (count) ->
      $players = $('#players')
      _.times(count, (i) ->
        if i is 0
          role = 'Storyteller'
        else if i is 1
          role = 'Complicator'
        else if i is count - 1
          role = 'Elaborator'
        else
          role = 'Player'
        Game.state.players.push(
          coins: 0
          words: 0
          number: i + 1
          role: role
        )
      )
      Game.Players.update()
  Roller:
    hide: ->
      $('#roller').hide()
    show: ->
      $('#roller').show()
    doRoll: ->
      roll = Math.floor(Math.random() * 3) + 1
      if roll is 1
        Game.Players.addWord('BUT')
      else if roll is 2
        Game.Players.addWord('WORD')
      else
        Game.Players.addWord('AND')
    onTap: ->
      dice = Number($(@).attr('data-dice'))
      if dice
        _.times(dice, Game.Roller.doRoll)
        if Game.Players.hasOverflow()
          Game.Story.startSentence()
      else
        Game.Story.startSentence()
  Story:
    startSentence: ->
      Game.Roller.hide()
      $('#story').show()
jQuery(document).ready(($) ->
  $('#start button').live('tap', Game.Start.startGame)
  $('#roller button, #roller a').live('tap', Game.Roller.onTap)
  $('#story button').live('tap', Game.Roller.show)
  $('.editor').live('keydown keyup mousedown mouseup', ->
    debugger
    console.log(arguments)
    console.log('editor event')
  )
)

@Game = Game
