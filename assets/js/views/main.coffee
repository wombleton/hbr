#= require story
#= require players

Ext.define('HBR.view.Main',
  extend: 'Ext.Container'
  config:
    fullscreen: true
    layout: 'fit'
    items: [
      {
        docked: 'top'
        items: [
          {
            align: 'right'
            text: 'omg'
          }
        ]
        ui: 'dark'
        xtype: 'titlebar'
      }
      {
        flex: 2
        xtype: 'story'
      }
      {
        count: 5
        xtype: 'players'
        docked: 'right'
        width: 200
      }
    ]
)
