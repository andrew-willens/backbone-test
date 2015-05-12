var app = app || {};
app.App = Backbone.View.extend({
    tag: 'form',
    id: '1stdibs-form',

    initialize: function() {
        this.render();
    },

    render: function() {
        var that = this,
            item;

        $.getJSON("data/item.json", function(data) {
            item = new Item(data.result.item);
            var title = new Title({title: item.get('title')});            
            
            that.$el.append( title.el );
        }).done(function() {
            $('#form-container').html(that.el);
        });
        
    }
});

new app.App();