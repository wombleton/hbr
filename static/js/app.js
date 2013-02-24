define([
    'Backbone.Marionette'
], function(Marionette) {
    var HBR = new Marionette.Application();

    HBR.addInitializer(function() {
        require([
            '/js/modules/start.js'
        ], function() {
            Backbone.history.start();
        });
    });

    HBR.addRegions({
        mainRegion: 'body'
    });

    HBR.start();

    this.HBR = HBR;

    return HBR;
});
