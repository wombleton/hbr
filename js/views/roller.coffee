Ext.ns('HBR')

HBR.Roller = Ext.extend(Ext.Panel,
  constructor: (cfg = {}) ->
    Ext.applyIf(cfg,
      cls: 'roller'
      dockedItems: [
        {
          dock: 'top'
          items: [
            {
              flex: 1
              html: 'buts'
            }
            {
              flex: 1
              html: 'words'
            }
            {
              flex: 1
              html: 'ands'
            }
          ]
          layout: 'hbox'

        }
        {
          dock: 'bottom'
          items: new Ext.Button(
            text: 'Done'
            ui: 'confirm'
          )
        }
      ]
      items: [
        {
          items: [
            {
              xtype: 'spacer'
            }
            {
              handler: ->
                @roll(1)
              scope: @
              text: '1'
              ui: 'round'
            }
            {
              handler: ->
                @roll(2)
              scope: @
              text: '2'
              ui: 'round'
            }
            {
              handler: ->
                @roll(3)
              scope: @
              text: '3'
              ui: 'round'
            }
            {
              xtype: 'spacer'
            }
          ]
          layout:
            pack: 'center'
          ui: 'light'
          xtype: 'toolbar'
        }
      ]
      store: Ext.StoreMgr.get('game')
      title: 'Roll'
    )
    HBR.Roller.superclass.constructor.call(@, cfg)
    @on('render', ->
      @el.on('singletap', (e) ->
        fly = Ext.fly(e.target)
        if fly.is('li')
          @roll(fly.getAttribute('data-count'))
      , @)
    , @)
    return
  rollDie: ->
    roll = Math.random()
    if roll < (1 / 3)
      @addDie('but')
    else if (1 / 3) < roll < (2 / 3)
      @addDie('word')
    else
      @addDie('and')
  addDie: (type) ->
    wordCount = @up('.main').store.get('type', type)
    debugger
  getWordCountStore: ->
  roll: (dice) ->
    for i in [1..Number(dice)]
      @rollDie()
)
