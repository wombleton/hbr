define([
   'Backbone.Marionette',
   'underscore',
   'text!/js/templates/start-player.html'
], function(Marionette, _, html) {
    return Marionette.ItemView.extend({
        template: _.template(html)
    });
});
