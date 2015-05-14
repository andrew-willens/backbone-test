app.Views.Description = Backbone.View.extend({

    el: "#description-container",

    initialize: function() {
        this.model = app.Models.Item;
        this.template = _.template( $("#description-tpl").html() );
    },

    render: function() {
        this.$el.append( 
            this.template(
                {description: this.model.get('item.description')}
            ) 
        );
        return this;
    }
});