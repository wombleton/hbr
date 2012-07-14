Ext.define('HBR.model.Player',
  extend: 'Ext.data.Model'
  config:
    fields: [
      {
        name: 'role'
        type: 'string'
      }
      {
        name: 'coins'
        type: 'integer'
      }
      {
        name: 'free_words'
        type: 'integer'
      }
      {
        name: 'active'
        type: 'boolean'
      }
      {
        name: 'name'
        type: 'string'
      }
    ]
)
