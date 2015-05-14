app.Views.Title = Backbone.View.extend({
    el: "#title-container",

    initialize: function() {
        this.model    = app.Models.Item;
        this.template = _.template( $("#title-tpl").html() );
    },

    render: function() {
        this.$el.append( 
            this.template({
                title: this.model.get('item.title')
            }) 
        );

        return this;
    }
    
});