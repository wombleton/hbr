#= require ../models/player
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
      @addPlayer(Ext.create('HBR.model.Player',
        name: "Player #{num + 1}"
      ))
    , @)
  addPlayer: (record) ->
    @add(
      active: false
      record: record
      xtype: 'player'
    )
  xtype: 'players'
)
