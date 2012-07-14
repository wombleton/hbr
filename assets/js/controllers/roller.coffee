Ext.define('HBR.controller.Roller',
  extend: 'Ext.app.Controller'
  config:
    ref:
      'aButton': 'button'
    control:
      'button':
        tap: 'roll'
  initialize: ->
    @callParent(arguments)
  roll: ->
    debugger
)
