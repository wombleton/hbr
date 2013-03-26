define([
   'Backbone.Marionette',
   'Backbone.ModelBinder/Backbone.ModelBinder',
   'underscore',
   'text!/js/templates/start-player.html'
], function(Marionette, ModelBinder, _, html) {
    return Marionette.ItemView.extend({
        className: 'row-fluid',
        initialize: function() {
            this.binder = new ModelBinder();
        },
        onRender: function() {
            this.binder.bindCustomTriggers(this.model, this.el, ['input']);
        },
        template: _.template(html)
    });
});
