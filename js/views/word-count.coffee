Ext.ns('HBR')

HBR.WordCount = Ext.extend(Ext.Panel,
  constructor: (cfg = {}) ->
    Ext.applyIf(cfg,
      cls: 'word-count'
      type: 'Words'
    )
    HBR.WordCount.superclass.constructor.call(@, cfg)
    @setCount(0)
  addWord: ->
    @setCount(++@count)
  setCount: (@count) ->
    @update("#{@count} #{@type}")
    if @type isnt 'Word' and @count >= 4
      @fireEvent('wordoverflow')

)
