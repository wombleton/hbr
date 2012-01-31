Ext.ns('HBR')
HBR.Main = Ext.extend(Ext.Panel,
  constructor: (cfg = {}) ->
    @andCount = new HBR.WordCount(
      dock: 'right'
      listeners:
        wordoverflow: ->
          @roller.disable()
        scope: @
      type: 'AND'
    )
    @butCount = new HBR.WordCount(
      dock: 'left'
      listeners:
        wordoverflow: ->
          @roller.disable()
        scope: @
      type: 'BUT'
    )
    @wordCount = new HBR.WordCount(
      dock: 'bottom'
    )
    @roller = new HBR.Roller(
      dock: 'bottom'
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
      dockedItems: [
        @andCount
        @butCount
        @wordCount
        @roller
        @players
      ]
      fullscreen: true
      items: @story
      layout: 'auto'
    )
    HBR.Main.superclass.constructor.call(@, cfg)
)
