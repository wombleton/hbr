define([
   'Backbone.Marionette',
   'Backbone.ModelBinder/Backbone.ModelBinder',
   'underscore',
   'text!/js/templates/start-player.html'
], function(Marionette, ModelBinder, _, html) {
    return Marionette.ItemView.extend({
        initialize: function() {
            this.binder = new ModelBinder({
                triggers: ['input']
            });
        },
        onRender: function() {
            this.binder.bindCustomTriggers(this.model, this.el, ['input']);
        },
        template: _.template(html)
    });
});
