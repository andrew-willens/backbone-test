app.Views.Measurements = Backbone.View.extend({
    tagName: 'div',
    className: "container",
    id: "measurements-container",

    initialize: function(data) {
        this.template = _.template( $("#measurements-tpl").html() );
        this.render(data);
    },

    render: function(data) {
        var units      = data.unit,
            shapes     = data.shape,
            str        = "";
    
        // capitalize
        units = _.object(
            _.map(units, function(val, key){
                return [key, val.charAt(0).toUpperCase() + val.slice(1)];
            })
        );

        this.$el.append( this.template({shapes: shapes, units: units}) );
        return this.el;
    }
});
