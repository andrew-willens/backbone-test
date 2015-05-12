app.Views.InternalNotes = Backbone.View.extend({

    tagName: "div",
    className: "container",
    id: "internalnotes-container",

    initialize: function(data) {
        this.template = _.template( $("#internalnotes-tpl").html() );
        this.render(data);
    },

    render: function(data) {
        this.$el.append( this.template(data) );
        return this;
    }

});