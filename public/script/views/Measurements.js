app.Views.Measurements = Backbone.View.extend({
    tagName: 'div',
    className: "container",
    id: "measurements-container",
    events: {
        "click input[name=meas_unit]"  : "setUnit",
        "click input[name=meas_shape]" : "setShape"
    },

    initialize: function(data) {
        this.listenTo(this.model, "change:measurement", this.renderDimensionFields);
        this.template = _.template( $("#measurements-tpl").html() );
        this.render(data.enums);
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
    },

    setUnit: function() {
        var unit = $("input[name='meas_unit']:checked").val();
        this.model.set({'measurement.unit': unit});
    },

    setShape: function() {
        var shape = $("input[name='meas_shape']:checked").val();
        this.model.set({ 'measurement.shape': shape.toLowerCase() });
    }

});
