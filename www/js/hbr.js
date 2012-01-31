(function() {

  Ext.setup({
    onReady: function() {
      return new HBR.Main();
    }
  });

  Ext.ns('HBR');

  HBR.Players = Ext.extend(Ext.Panel, {
    constructor: function(cfg) {
      var i, items, _ref;
      if (cfg == null) cfg = {};
      items = [];
      Ext.applyIf(cfg, {
        items: items,
        layout: 'hbox'
      });
      for (i = 1, _ref = Math.ceil(2 + 3 * Math.random()); 1 <= _ref ? i <= _ref : i >= _ref; 1 <= _ref ? i++ : i--) {
        items.push(new Ext.Panel({
          flex: 1,
          html: "Player " + i
        }));
      }
      return HBR.Players.superclass.constructor.call(this, cfg);
    }
  });

  Ext.ns('HBR');

  HBR.Roller = Ext.extend(Ext.Panel, {
    constructor: function(cfg) {
      if (cfg == null) cfg = {};
      Ext.applyIf(cfg, {
        html: "<ul class=\"dice\">\n  <li data-count=\"1\">1</li>\n  <li data-count=\"2\">2</li>\n  <li data-count=\"3\">3</li>\n</ul>"
      });
      HBR.Roller.superclass.constructor.call(this, cfg);
      this.on('render', function() {
        return this.el.on('singletap', function(e) {
          var fly;
          fly = Ext.fly(e.target);
          if (fly.is('li')) return this.roll(fly.getAttribute('data-count'));
        }, this);
      }, this);
    },
    rollDie: function() {
      var roll;
      roll = Math.random();
      if (roll < (1 / 3)) {
        return this.fireEvent('diceroll', 'but');
      } else if (((1 / 3) < roll && roll < (2 / 3))) {
        return this.fireEvent('diceroll', 'word');
      } else {
        return this.fireEvent('diceroll', 'and');
      }
    },
    roll: function(dice) {
      var i, _ref, _results;
      _results = [];
      for (i = 1, _ref = Number(dice); 1 <= _ref ? i <= _ref : i >= _ref; 1 <= _ref ? i++ : i--) {
        _results.push(this.rollDie());
      }
      return _results;
    }
  });

  Ext.ns('HBR');

  HBR.WordCount = Ext.extend(Ext.Panel, {
    constructor: function(cfg) {
      if (cfg == null) cfg = {};
      Ext.applyIf(cfg, {
        cls: 'word-count',
        type: 'Words'
      });
      HBR.WordCount.superclass.constructor.call(this, cfg);
      return this.setCount(0);
    },
    addWord: function() {
      return this.setCount(++this.count);
    },
    setCount: function(count) {
      this.count = count;
      this.update("" + this.count + " " + this.type);
      if (this.type !== 'Word' && this.count >= 4) {
        return this.fireEvent('wordoverflow');
      }
    }
  });

  Ext.ns('HBR');

  HBR.Story = Ext.extend(Ext.Panel, {
    constructor: function(cfg) {
      if (cfg == null) cfg = {};
      Ext.applyIf(cfg, {
        html: 'Story',
        layout: 'fit'
      });
      return HBR.Story.superclass.constructor.call(this, cfg);
    }
  });

  Ext.ns('HBR');

  HBR.Word = Ext.extend(Ext.form.Text, {
    constructor: function(cfg) {
      if (cfg == null) cfg = {};
      Ext.applyIf(cfg, {
        width: 220
      });
      return HBR.Word.superclass.constructor.call(this, cfg);
    }
  });

  Ext.ns('HBR');

  HBR.Main = Ext.extend(Ext.Panel, {
    constructor: function(cfg) {
      if (cfg == null) cfg = {};
      this.andCount = new HBR.WordCount({
        dock: 'right',
        listeners: {
          wordoverflow: function() {
            return this.roller.disable();
          },
          scope: this
        },
        type: 'AND'
      });
      this.butCount = new HBR.WordCount({
        dock: 'left',
        listeners: {
          wordoverflow: function() {
            return this.roller.disable();
          },
          scope: this
        },
        type: 'BUT'
      });
      this.wordCount = new HBR.WordCount({
        dock: 'bottom'
      });
      this.roller = new HBR.Roller({
        dock: 'bottom',
        listeners: {
          diceroll: function(type) {
            if (type === 'but') {
              return this.butCount.addWord();
            } else if (type === 'and') {
              return this.andCount.addWord();
            } else {
              return this.wordCount.addWord();
            }
          },
          scope: this
        }
      });
      this.players = new HBR.Players({
        dock: 'top'
      });
      this.story = new HBR.Story();
      Ext.applyIf(cfg, {
        dockedItems: [this.andCount, this.butCount, this.wordCount, this.roller, this.players],
        fullscreen: true,
        items: this.story,
        layout: 'auto'
      });
      return HBR.Main.superclass.constructor.call(this, cfg);
    }
  });

}).call(this);
