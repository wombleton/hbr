Ext.ns('HBR')

HBR.FreeWord = Ext.extend(HBR.Word,
  constructor: (word) ->
    HBR.FreeWord.superclass.constructor.call(@,
      cls: 'free-word'
      listeners:
        render: ->
          @el.on('singletap', (e) ->
            @getStory().addFreeWord('Robot')
          , @)
        scope: @
      html: word
    )
)

