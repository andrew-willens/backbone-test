app.Views.Measurements = Backbone.View.extend({
    tagName: 'div',
    className: "container",
    id: "measurements-container",
    events: {
        "click input[name=meas-unit]"  : "setUnit",
        "click input[name=meas-shape]" : "setShape"
    },

    initialize: function(data) {
        this.listenTo(this.model, "change", this.renderDimensionFields);
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

    renderDimensionFields: function() {
        alert('changed shape');
    },

    setUnit: function() {
        var unit = $("input[name='meas-unit']:checked").val();
        this.model.set('measurement.unit', unit );
    },

    setShape: function() {
        var shape = $("input[name='meas-shape']:checked").val();
        this.model.set({ 'shape': shape.toLowerCase() });
    }

});
