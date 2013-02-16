var jam = {
    "packages": [
        {
            "name": "async",
            "location": "/js/jam/async",
            "main": "lib/async.js"
        },
        {
            "name": "backbone",
            "location": "/js/jam/backbone",
            "main": "backbone.js"
        },
        {
            "name": "backbone-localStorage",
            "location": "/js/jam/backbone-localStorage",
            "main": "main.js"
        },
        {
            "name": "Backbone.BabySitter",
            "location": "/js/jam/Backbone.BabySitter",
            "main": "lib/amd/backbone.babysitter.js"
        },
        {
            "name": "Backbone.Marionette",
            "location": "/js/jam/Backbone.Marionette",
            "main": "lib/core/amd/backbone.marionette.js"
        },
        {
            "name": "Backbone.Wreqr",
            "location": "/js/jam/Backbone.Wreqr",
            "main": "lib/amd/backbone.wreqr.js"
        },
        {
            "name": "bootstrap",
            "location": "/js/jam/bootstrap"
        },
        {
            "name": "jquery",
            "location": "/js/jam/jquery",
            "main": "jquery-1.9.1.min.js"
        },
        {
            "name": "moment",
            "location": "/js/jam/moment",
            "main": "moment.js"
        },
        {
            "name": "querystring",
            "location": "/js/jam/querystring",
            "main": "querystring.js"
        },
        {
            "name": "socket.io",
            "location": "/js/jam/socket.io",
            "main": "socket.io.js"
        },
        {
            "name": "text",
            "location": "/js/jam/text",
            "main": "text.js"
        },
        {
            "name": "underscore",
            "location": "/js/jam/underscore",
            "main": "underscore.js"
        },
        {
            "name": "underscore.string",
            "location": "/js/jam/underscore.string",
            "main": "./lib/underscore.string"
        }
    ],
    "version": "0.2.12",
    "shim": {
        "backbone": {
            "deps": [
                "underscore"
            ],
            "exports": "Backbone"
        },
        "underscore": {
            "exports": "_"
        }
    }
};

if (typeof require !== "undefined" && require.config) {
    require.config({
    "packages": [
        {
            "name": "async",
            "location": "/js/jam/async",
            "main": "lib/async.js"
        },
        {
            "name": "backbone",
            "location": "/js/jam/backbone",
            "main": "backbone.js"
        },
        {
            "name": "backbone-localStorage",
            "location": "/js/jam/backbone-localStorage",
            "main": "main.js"
        },
        {
            "name": "Backbone.BabySitter",
            "location": "/js/jam/Backbone.BabySitter",
            "main": "lib/amd/backbone.babysitter.js"
        },
        {
            "name": "Backbone.Marionette",
            "location": "/js/jam/Backbone.Marionette",
            "main": "lib/core/amd/backbone.marionette.js"
        },
        {
            "name": "Backbone.Wreqr",
            "location": "/js/jam/Backbone.Wreqr",
            "main": "lib/amd/backbone.wreqr.js"
        },
        {
            "name": "bootstrap",
            "location": "/js/jam/bootstrap"
        },
        {
            "name": "jquery",
            "location": "/js/jam/jquery",
            "main": "jquery-1.9.1.min.js"
        },
        {
            "name": "moment",
            "location": "/js/jam/moment",
            "main": "moment.js"
        },
        {
            "name": "querystring",
            "location": "/js/jam/querystring",
            "main": "querystring.js"
        },
        {
            "name": "socket.io",
            "location": "/js/jam/socket.io",
            "main": "socket.io.js"
        },
        {
            "name": "text",
            "location": "/js/jam/text",
            "main": "text.js"
        },
        {
            "name": "underscore",
            "location": "/js/jam/underscore",
            "main": "underscore.js"
        },
        {
            "name": "underscore.string",
            "location": "/js/jam/underscore.string",
            "main": "./lib/underscore.string"
        }
    ],
    "shim": {
        "backbone": {
            "deps": [
                "underscore"
            ],
            "exports": "Backbone"
        },
        "underscore": {
            "exports": "_"
        }
    }
});
}
else {
    var require = {
    "packages": [
        {
            "name": "async",
            "location": "/js/jam/async",
            "main": "lib/async.js"
        },
        {
            "name": "backbone",
            "location": "/js/jam/backbone",
            "main": "backbone.js"
        },
        {
            "name": "backbone-localStorage",
            "location": "/js/jam/backbone-localStorage",
            "main": "main.js"
        },
        {
            "name": "Backbone.BabySitter",
            "location": "/js/jam/Backbone.BabySitter",
            "main": "lib/amd/backbone.babysitter.js"
        },
        {
            "name": "Backbone.Marionette",
            "location": "/js/jam/Backbone.Marionette",
            "main": "lib/core/amd/backbone.marionette.js"
        },
        {
            "name": "Backbone.Wreqr",
            "location": "/js/jam/Backbone.Wreqr",
            "main": "lib/amd/backbone.wreqr.js"
        },
        {
            "name": "bootstrap",
            "location": "/js/jam/bootstrap"
        },
        {
            "name": "jquery",
            "location": "/js/jam/jquery",
            "main": "jquery-1.9.1.min.js"
        },
        {
            "name": "moment",
            "location": "/js/jam/moment",
            "main": "moment.js"
        },
        {
            "name": "querystring",
            "location": "/js/jam/querystring",
            "main": "querystring.js"
        },
        {
            "name": "socket.io",
            "location": "/js/jam/socket.io",
            "main": "socket.io.js"
        },
        {
            "name": "text",
            "location": "/js/jam/text",
            "main": "text.js"
        },
        {
            "name": "underscore",
            "location": "/js/jam/underscore",
            "main": "underscore.js"
        },
        {
            "name": "underscore.string",
            "location": "/js/jam/underscore.string",
            "main": "./lib/underscore.string"
        }
    ],
    "shim": {
        "backbone": {
            "deps": [
                "underscore"
            ],
            "exports": "Backbone"
        },
        "underscore": {
            "exports": "_"
        }
    }
};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}