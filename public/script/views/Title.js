app.Views.Title = Backbone.View.extend({
    // el: "#title-container",
    tagName: "div",
    className: "container",
    id: "title-container",
    events: {
        "change input" : "saveChange"
    },

    initialize: function() {
        this.template = _.template( $("#title-tpl").html() );
        this.render();
    },

    render: function() {
        this.$el.append( this.template(this.model.get('item.title')) );
        return this;
    },

    saveChange: function() {   
        console.log(this.model.toJSON());
        this.model.set({title: this.$el.text().trim()});
        console.log(this.model.get('item.title'));
    }
});