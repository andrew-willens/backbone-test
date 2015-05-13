app.Views.Title = Backbone.View.extend({
    // el: "#title-container",
    tagName: "div",
    className: "container",
    id: "title-container",
    events: {
        "change input" : "saveChange"
    },

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
    },

    saveChange: function() {   
        console.log(this.model.toJSON());
        // this.model.set({title: this.$el.text().trim()});
        // console.log(this.model.get('item.title'));
    }
});