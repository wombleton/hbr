Ext.ns('HBR')

HBR.Word = Ext.extend(Ext.Panel,
  constructor: (cfg = {}) ->
    HBR.Word.superclass.constructor.call(@, cfg)
  getStory: ->
    Ext.ComponentQuery.query('story')[0]
)
