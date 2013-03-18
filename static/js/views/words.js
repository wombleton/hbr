define([
   'Backbone.Marionette',
   'Backbone.ModelBinder/Backbone.ModelBinder',
   '/js/app.js',
   'text!/js/templates/words.html'
], function(Marionette, ModelBinder, HBR, html) {
    return Marionette.View.extend({
        className: 'words container-fluid flex-container flex-vertical full-height',
        events: {
            'input [type=text]': function(e) {
                var $el = $(e.currentTarget);

                this.updateCount();

                e.preventDefault();
                return false;
            }
        },
        ui: {
            count: '.count',
            words: '[type=text]',
            taparea: '.tap-area'
        },
        updateCount: function() {
            var filled,
                wordsLeft = this.wordsLeft();

            this.ui.count.html(wordsLeft);

            filled = _.all(this.$('[type=text]'), function(word) {
                return $(word).val().trim();
            });

            if (wordsLeft && filled) {
                this.ui.taparea.append('<input class="input-medium" type="text">');

            }
        },
        wordsLeft: function() {
            var count = this.model.wordsLeft();

            this.$('[type=text]').each(_.bind(function(i, el) {
                var v = $(el).val().trim().toLowerCase();

                if (v && v !== this.model.getFreeWord()) {
                    count--
                }
            }, this));

            return count;
        },
        initialize: function() {
            this.count = this.model.wordsLeft();
        },
        validate: function() {
            this.render();
        },
        render: function() {
            this.$el.html(this.template({
                content: this.model.get('content')
            }));

            this.bindUIElements();

            this.updateCount();

            //this.binder.bindCustomTriggers(this.model, this.el, ['input']);

            return this;
        },
        template: _.template(html)
    });
});
