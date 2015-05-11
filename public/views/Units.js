var Units = Backbone.View.extend({
    el: "#"

    initialize: function() {
        console.log('Units view initialized.');
        this.render();
    },

    render: function() {
        var tpl = _.template( $("#unitsdiv-tpl").html() );

    }

});

new Units();

// Measurements are in
//  Measured item is