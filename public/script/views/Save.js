app.Views.Save = Backbone.View.extend({

    tagName: "div",
    className: "container",
    id: "save-container",

    initialize: function() { 
        this.template = _.template( $("#save-tpl").html() );
        this.render();
    },

    render: function() {
        this.$el.append( this.template() );
        return this;
    }
});