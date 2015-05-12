app.Views.Description = Backbone.View.extend({
    tagName: "div",
    className: "container",
    id: "description-container",

    initialize: function(data) {
        this.template = _.template( $("#description-tpl").html() );
        this.render(data);
    },

    render: function(data) {
        this.$el.append( this.template(data) );
        return this;
    }
});