app.Views.Dimensions = Backbone.View.extend({
    
    tagName: "div",
    className: "container",
    id: "dimensions-container",

    initialize: function() {
        this.template = _.template( $("#dimensions-tpl").html() );
        this.listenTo(this.model, "change:measurement.unit", this.alertUnit);
        this.listenTo(this.model, "change:measurement.shape", this.alertShape);
        this.render();
    },

    render: function() {
        var dimensions = this.model.get('measurement'),
            disabled = dimensions.shape === "" ? true : false,
            unit = dimensions.unit;
            dimensions.diameter = "";
        
        // capitalize
        dimensions = _.object( 
            _.map(dimensions, function(val, key){
                return [key.charAt(0).toUpperCase() + key.slice(1), val];
            })
        ),
        delete dimensions.Unit;
        delete dimensions.Shape;

        this.$el.append( this.template({dimensions: dimensions, unit: unit, disabled: disabled}) );
        return this.$el;
    },

    changeShape: function() {
        alert('shape changed');
    },

    changeUnit: function() {
        alert('unit changed');
        this.render();
    }

});
