Ext.ns('HBR')

HBR.WordCount = Ext.extend(Ext.Panel,
  constructor: (cfg = {}) ->
    Ext.applyIf(cfg,
      cls: 'word-count'
      count: 0
      items: new HBR.FreeWord(cfg.type)
    )
    HBR.WordCount.superclass.constructor.call(@, cfg)
  addWord: ->
    @setCount(++@count)
    @add(new HBR.BlankWord())
    @doLayout()
  setCount: (@count) ->
    if @type isnt 'Robot' and @count >= 4
      @fireEvent('wordoverflow')

)
