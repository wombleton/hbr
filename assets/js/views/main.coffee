#= require story
#= require players

Ext.define('HBR.view.Main',
  extend: 'Ext.Container'
  config:
    fullscreen: true
    layout: 'fit'
    items: [
      {
        flex: 2
        xtype: 'story'
      }
      {
        count: 5
        flex: 1
        xtype: 'players'
        docked: 'right'
      }
    ]
)
