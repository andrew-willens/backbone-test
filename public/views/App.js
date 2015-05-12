var app = app || {};
app.App = Backbone.View.extend({
    el: "#1stdibs-form",

    initialize: function() {
        this.render();
    },

    render: function() {
        var that = this,
            item;

        $.getJSON("data/item.json", function(data) {
            item = new Item(data.result.item);
        }).done(function() {
            var title = new Title({title: item.get('title')});

            console.log(this);
            
            that.$el.append( title.el );
        });
        
    }
});

new app.App();