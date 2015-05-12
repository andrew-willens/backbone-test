app.Views.Conditions = Backbone.View.extend({
    
    tagName: "div",
    className: "container",
    id: "conditions-container",

    initialize: function(data) {
        this.template = _.template( $("#conditions-tpl").html() );
        this.render(data);
    },

    render: function(data) {
        this.$el.append( this.template({conditions: data }) );
        return this;
    }
});