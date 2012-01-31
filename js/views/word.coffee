Ext.ns('HBR')

HBR.Word = Ext.extend(Ext.form.Text,
  constructor: (cfg = {}) ->
    Ext.applyIf(cfg,
      width: 220
    )
    HBR.Word.superclass.constructor.call(@, cfg)
)
