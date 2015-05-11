var Units = Backbone.View.extend({
    el: "#units-container",

    initialize: function(model, view) {
        console.log('Units view initialized.');
        this.render(model, view);
    },

    render: function() {
        var tpl = _.template( $("#unitsdiv-tpl").html() );
        var descriptions = [ "Measurements are in", "Measured item is" ];
        var units = {"in": "inches","cm": "centimeters"};
        var str = "";

        var radio = new Radio({ unit: 'Inches', abbr: 'in' });
        // console.log( radio.render().el );

        for (var i = 0; i < descriptions.length; i++) {
            var rendered_tpl = tpl({description: descriptions[i]})
            str += rendered_tpl;
        };

        this.$el.append(str);
        return this.el;
    }

});

new Units({dumy: 1}, new Radio({ unit: 'Inches', abbr: 'in' }) );
