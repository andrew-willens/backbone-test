app.Views.Dimensions = Backbone.View.extend({
    
    tagName: "div",
    className: "container",
    id: "dimensions-container",

    initialize: function(data) {
        this.template = _.template( $("#dimensions-tpl").html() );
        this.render(data);
    },

    render: function(data) {
        // capitalize
        data.diameter = "";
        var dimensions = _.object( 
            _.map(data, function(val, key){
                return [key.charAt(0).toUpperCase() + key.slice(1), val];
            })
        ),
        unit = dimensions.unit;
        delete dimensions.Unit;
        delete dimensions.Shape;

        this.$el.append( this.template({dimensions: dimensions, unit: unit}));
        return this.el;
    }

});
