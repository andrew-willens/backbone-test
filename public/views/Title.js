var Title = Backbone.View.extend({
    // el: "#title-container",
    tag: "div",
    class: "container",
    id: "title-container",

    initialize: function(data) {
        this.template = _.template( $("#title-tpl").html() );
        this.render(data);
    },

    render: function(data) {
        this.$el.append( this.template(data) );
        return this;
    }
});

// $.getJSON("data/item.json", function(data){
//     var item = new Item(data.result.item);
//     new Title( {title: item.get('title')} );
// });