Ext.ns('HBR')

HBR.Roller = Ext.extend(Ext.Panel,
  constructor: (cfg = {}) ->
    Ext.applyIf(cfg,
      html: """
        <ul class="dice">
          <li data-count="1">1</li>
          <li data-count="2">2</li>
          <li data-count="3">3</li>
        </ul>
      """
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
      @fireEvent('diceroll', 'but')
    else if (1 / 3) < roll < (2 / 3)
      @fireEvent('diceroll', 'word')
    else
      @fireEvent('diceroll', 'and')
  roll: (dice) ->
    for i in [1..Number(dice)]
      @rollDie()
)
