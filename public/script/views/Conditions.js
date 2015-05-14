app.Views.Conditions = Backbone.View.extend({

    el: "#conditions-container",

    initialize: function() {
        this.model = app.Models.Enumerable;
        this.template = _.template( $("#conditions-tpl").html() );
    },

    render: function() {
        this.$el.append( 
            this.template({
                conditions: this.model.get('itemEnums.condition.description') 
            }) 
        );
        return this;
    }
});