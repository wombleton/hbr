#= require player

Ext.define('HBR.view.Players',
  extend: 'Ext.Container'
  config:
    count: 3
    flex: 1
    layout: 'vbox'
  initialize: ->
    @callParent(arguments)
    _.times(@getCount(), (num) ->
      @add(
        active: num is 0
        name: "foos #{num + 1}"
        xtype: 'player'
      )
    , @)
  xtype: 'players'
)
