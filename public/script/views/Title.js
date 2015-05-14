app.Views.Title = Backbone.View.extend({
    el: "#title-container",
    // tagName: "div",
    // className: "container",
    // id: "title-container",

    initialize: function(data) {
        this.template = _.template( $("#title-tpl").html() );
        this.render(data.title);
    },

    render: function(data) {
        this.$el.append( 
            this.template({
                title: data
            }) 
        );

        return this;
    }
    
});