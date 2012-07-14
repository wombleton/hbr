#= require sencha-touch-all-debug
#= require underscore-1.3.1

#= require controllers/roller
#= require views/main

Ext.application(
  controllers: ['Roller']
  model: ['Player']
  views: ['Main']
  name: 'HBR'
  launch: ->
    Ext.create('HBR.view.Main')
)
