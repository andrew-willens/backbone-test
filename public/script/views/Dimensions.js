app.Views.Dimensions = Backbone.View.extend({
    
    tagName: "div",
    className: "container",
    id: "dimensions-container",

    initialize: function(data) {
        this.template = _.template( $("#dimensions-tpl").html() );
        this.render(data);
    },

    render: function(data) {
        console.log(data);
        // capitalize
        var dimensions = _.object( 
            _.map(data, function(val, key){
                return [key, val.charAt(0).toUpperCase() + val.slice(1)];
            })
        ),
        unit = dimensions.unit;
        delete(dimensions.unit);

        this.$el.append( this.template({dimensions: dimensions, unit: unit}));
        return this.el;
    }

});
