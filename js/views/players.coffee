Ext.ns('HBR')

HBR.Players = Ext.extend(Ext.Panel,
  constructor: (cfg = {}) ->
    items = []
    Ext.applyIf(cfg,
      items: items
      layout: 'hbox'
    )

    for i in [1..Math.ceil(2 + 3 * Math.random())]
      items.push(new Ext.Panel(
        flex: 1
        html: "Player #{i}<br>0 coins"
      ))
    HBR.Players.superclass.constructor.call(@, cfg)
)

