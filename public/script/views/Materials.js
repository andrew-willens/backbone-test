app.Views.Materials = Backbone.View.extend({
    // el: "#materials-container",
    tagName: 'div',
    className: "container",
    id: "materials-container",

    initialize: function(data) {
        this.template = _.template( $("#materials-tpl").html() );
        this.render(data);
    },

    render: function(data) {
        this.$el.append(this.template({materials: data.materials, restricted: data.restricted}));
        return this;
    }
});