Ext.ns('HBR')
HBR.Main = Ext.extend(Ext.Panel,
  constructor: (cfg = {}) ->
    @andCount = new HBR.WordCount(
      dock: 'right'
      layout: 'vbox'
      listeners:
        wordoverflow: ->
          @roller.disable()
        scope: @
      type: 'but'
    )
    @butCount = new HBR.WordCount(
      dock: 'left'
      layout: 'vbox'
      listeners:
        wordoverflow: ->
          @roller.disable()
        scope: @
      type: 'and'
    )
    @wordCount = new HBR.WordCount(
      dock: 'bottom'
      layout: 'hbox'
      type: 'Robot'
    )
    @roller = new HBR.Roller(
      listeners:
        diceroll: (type) ->
          if type is 'but'
            @butCount.addWord()
          else if type is 'and'
            @andCount.addWord()
          else
            @wordCount.addWord()
        scope: @
    )
    @players = new HBR.Players(
      dock: 'top'
    )
    @story = new HBR.Story()
    Ext.applyIf(cfg,
      fullscreen: true
      items: @roller
      layout: 'card'
    )
    HBR.Main.superclass.constructor.call(@, cfg)
)

Ext.reg('main', HBR.Main)
