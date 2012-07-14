Ext.define('HBR.view.Roller',
  extend: 'Ext.Panel'
  config:
    docked: 'left'
    items: [
      Ext.create('Ext.Button',
        flex: 1
        text: 'Roll'
        ui: 'confirm'
      )
      Ext.create('Ext.Button',
        disabled: false
        flex: 1
        text: 'Done'
      )
    ]
    xtype: 'roller'
    layout: 'vbox'
)
