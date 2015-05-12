app.Views.Dimensions = Backbone.View.extend({
    
    tagName: "div",
    className: "container",
    id: "dimensions-container",
    // events: {
    //   "click " : "checkShape"
    // },

    initialize: function(data) {
        this.listenTo(this.model, "change:measurement", this.alert);
        this.listenTo(this.model, "change:measurement", this.alert);
        this.template = _.template( $("#dimensions-tpl").html() );
        this.render();
    },

    render: function() {
        var dimensions = this.model.get('measurement');
        dimensions.diameter = "";
        
        // capitalize
        unit = dimensions.unit;
        dimensions = _.object( 
            _.map(dimensions, function(val, key){
                return [key.charAt(0).toUpperCase() + key.slice(1), val];
            })
        ),
        delete dimensions.Unit;
        delete dimensions.Shape;

        this.$el.append( this.template({dimensions: dimensions, unit: unit}));
        return this.el;
    },

    reRender: function() {
        alert('model.measurements changed');
        var dimensions = this.model.get('measurement');
        // dimensions.diameter = "";
        
        // capitalize
        unit = dimensions.unit;
        dimensions = _.object( 
            _.map(dimensions, function(val, key){
                return [key.charAt(0).toUpperCase() + key.slice(1), val];
            })
        ),
        delete dimensions.Unit;
        delete dimensions.Shape;

        $("#dimensions-container").html( this.template({dimensions: dimensions, unit: unit}));
    },

    alert: function() {
        alert('change');
    }

    // checkShape: function () {
    //     // alert('anything');
    //     // console.log(this.model);
    // }

});
