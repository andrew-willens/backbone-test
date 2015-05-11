var Radio = Backbone.View.extend({
    el: "#units-container",

    initialize: function() {
        console.log("Radio view initialized.");
        this.render();
    },

    render: function() {
        var tpl = _.template( $("#unitsradio-tpl").html() );
    }
});