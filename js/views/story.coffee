Ext.ns('HBR')

HBR.Story = Ext.extend(Ext.Panel,
  constructor: (cfg = {}) ->
    items = []
    Ext.applyIf(cfg,
      items: items
      layout:
        align: 'stretch'
        type: 'vbox'
    )
    items.push(new HBR.Sentence(html: 'Happy Birthday, Robot!'), new HBR.Sentence(active: true))

    HBR.Story.superclass.constructor.call(@, cfg)
  addBlankWord: (word) ->
    sentence = _.last(@query('.sentence'))
    if sentence.hasEmptyWord()
      sentence.focusEmptyWord()
    else
      sentence.add(new HBR.EditableWord())
      sentence.doLayout()
      sentence.focusEmptyWord()
      word.destroy()
)

Ext.reg('story', HBR.Story)
