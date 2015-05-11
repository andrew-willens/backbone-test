var Radio = Backbone.View.extend({
    el: "#units-container",

    initialize: function(attributes) {
        console.log("Radio view initialized.");
        this.render(attributes);
    },

    render: function(attributes) {
        var tpl = _.template( $("#unitsradio-tpl").html() );
        var str = "";

        str += tpl(attributes);

        this.$el.append(str);
        return this.el;
    }
});

// new Radio();