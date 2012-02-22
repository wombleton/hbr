Ext.ns('HBR')

HBR.EditableWord = Ext.extend(Ext.form.Text,
  constructor: ->
    HBR.EditableWord.superclass.constructor.call(@,
      cls: 'editable-word'
      width: 220
    )
)
Ext.reg('editable-word', HBR.EditableWord)
