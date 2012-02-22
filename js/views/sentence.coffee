Ext.ns('HBR')

HBR.Sentence = Ext.extend(Ext.Panel,
  constructor: (cfg = {}) ->
    cfg = Ext.applyIf(cfg,
      active: false
      cls: 'sentence'
      flex: 1
      html: 'Active sentence'
      layout: 'auto'
    )
    HBR.Sentence.superclass.constructor.call(@, cfg)
  activate: ->
    @active = true
  deactivate: ->
    @active = false
  getEmptyWord: ->
    _.find(@query('.editable-word'), (word) ->
      _(word.getValue()).trim() is ''
    )
  focusEmptyWord: ->
    @getEmptyWord()?.focus()
  hasEmptyWord: ->
    !!@getEmptyWord()
)
Ext.reg('sentence', HBR.Sentence)
