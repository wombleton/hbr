Ext.define('HBR.model.Sentence',
  extend: 'Ext.data.Model'
  associations: [
    {
      model: 'HBR.model.Word'
      name: 'words'
      type: 'hasMany'
    }
  ]
  fields: [
    {
      name: 'active'
      type: 'boolean'
    }
  ]
)
