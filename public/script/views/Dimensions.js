app.Views.Dimensions = Backbone.View.extend({
    
    tagName: "div",
    className: "container",
    id: "dimensions-container",

    initialize: function() {
        this.model = app.Models.Item;
        this.template = _.template( $("#dimensions-tpl").html() );
        this.listenTo(this.model, "change:item.measurement.unit", this.changeUnit);
        this.listenTo(this.model, "change:item.measurement.shape", this.changeShape);
    },

    render: function() {
        var dimensions = this.model.get('item.measurement'),
            disabled = dimensions.shape === "" ? true : false,
            unit = dimensions.unit;
            dimensions.diameter = "";
        
        delete dimensions.unit;
        delete dimensions.shape;
        
        // capitalize
        dimensions = _.object( 
            _.map(dimensions, function(val, key){
                //capitalize
                return [key.charAt(0).toUpperCase() + key.slice(1), val];
            })
        ),

        this.$el.append( this.template( {dimensions: dimensions, unit: unit, disabled: disabled} ));
        return this.$el;
    },

    changeShape: function() {
        var circular = this.model.get('item.measurement.shape') === 'circular';
        $(".sizing input").prop("disabled", circular);
        $(".circ-dim").prop("disabled", !circular);
    },

    changeUnit: function() {
        $(".input-group-addon").text(this.model.get('item.measurement.unit'));
    }

});
