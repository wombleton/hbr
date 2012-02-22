Ext.ns('HBR')

HBR.BlankWord = Ext.extend(HBR.Word,
  constructor: ->
    HBR.BlankWord.superclass.constructor.call(@,
      cls: 'blank-word'
      listeners:
        render: ->
          @el.on('singletap', ->
            @getStory().addBlankWord(@)
          , @)
        scope: @
      html: 'Word'
    )
)
