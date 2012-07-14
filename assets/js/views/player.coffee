Ext.define('HBR.view.Player',
  extend: 'Ext.Container'
  xtype: 'player'
  config:
    cls: 'player'
    flex: 1
    items:
      docked: 'bottom'
      items: [
        {
          flex: 1
          text: 'Roll'
          ui: 'confirm'
        }
        {
          flex: 1
          text: 'Done'
        }
      ]
      xtype: 'toolbar'
    record: null
  initialize: ->
    @callParent(arguments)
    @update()
  update: ->
    record = @getRecord()
    active = record.get('active')
    @setHtml("""
      <div>#{record.get('name')}</div>
    """)
    @setActive(record.get('active'))
  setActive: (active) ->
    if active
      @addCls('active')
    else
      @removeCls('active')
)
