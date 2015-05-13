app.Views.Dimensions = Backbone.View.extend({
    
    tagName: "div",
    className: "container",
    id: "dimensions-container",

    initialize: function() {
        this.template = _.template( $("#dimensions-tpl").html() );
        this.listenTo(this.model, "change:measurement.unit", this.changeUnit);
        this.listenTo(this.model, "change:measurement.shape", this.changeShape);
        this.render();
    },

    render: function() {
        var dimensions = this.model.get('measurement'),
            disabled = dimensions.shape === "" ? true : false,
            unit = dimensions.unit;
            dimensions.diameter = "";
        
        delete dimensions.unit;
        delete dimensions.shape;
        // capitalize
        dimensions = _.object( 
            _.map(dimensions, function(val, key){
                return [key.charAt(0).toUpperCase() + key.slice(1), val];
            })
        ),

        this.$el.append( this.template( {dimensions: dimensions, unit: unit, disabled: disabled} ));
        return this.$el;
    },

    changeShape: function() {
        var circular = this.model.get('measurement.shape') === 'circular';
        $(".sizing input").prop("disabled", circular);
        $(".circ-dim").prop("disabled", !circular);
    },

    changeUnit: function() {
        $(".input-group-addon").text(this.model.get('measurement.unit'));
    }

});
