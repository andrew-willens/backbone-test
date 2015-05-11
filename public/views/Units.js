var Units = Backbone.View.extend({
    el: "#units-container",

    initialize: function(model, view) {
        console.log('Units view initialized.');
        this.template = _.template( $("#unitsdiv-tpl").html() );
        this.render(model, view);
    },

    render: function() {
        
        // capitalize units
        var units = _.object(
            _.map({"in": "inches","cm": "centimeters"}, function(val, key){
                return [key, val.charAt(0).toUpperCase() + val.slice(1)];
            })
        );
        var shapes = ["Rectangular", "Circular"];
            str = "";
        

        str += this.template({shapes: shapes, units: units});

        this.$el.append(str);
        return this.el;
    }

});

new Units();
