define([
    'backbone',
    '/js/app.js'
], function(Backbone, HBR) {
    var AppRouter = Backbone.Router.extend({
        routes: {}
    });

    HBR.router = new AppRouter();

    return HBR.router;
});
