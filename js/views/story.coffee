Ext.ns('HBR')

HBR.Story = Ext.extend(Ext.Panel,
  constructor: (cfg = {}) ->
    Ext.applyIf(cfg,
      html: 'Story'
      layout: 'fit'
    )
    HBR.Story.superclass.constructor.call(@, cfg)
)
