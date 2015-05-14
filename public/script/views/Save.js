app.Views.Save = Backbone.View.extend({

    el: "#save-container",

    initialize: function() { 
        this.template = _.template( $("#save-tpl").html() );
    },

    render: function() {
        this.$el.append( this.template() );
        return this;
    }
    
});