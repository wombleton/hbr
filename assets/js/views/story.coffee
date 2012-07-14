#= require ../models/sentence

Ext.define('HBR.view.Story',
  extend: 'Ext.Panel'
  xtype: 'story'
  config:
    flex: 2
  initialize: ->
    store = Ext.create('Ext.data.Store',
      model: 'HBR.model.Sentence'
      proxy:
        id: 'sentences'
        type: 'localstorage'
      storeId: 'sentences'
    )
)
