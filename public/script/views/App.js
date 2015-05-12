app.Views.App = Backbone.View.extend({
    tagName: 'form',
    id: '1stdibs-form',

    initialize: function() {
        this.render();
    },

    render: function() {
        var that = this,
            enums;

        $.getJSON("script/data/enums.json", function(data) {
            enums = new app.Models.Enumerable(data.itemEnums);
        });

        $.getJSON("script/data/item.json", function(data) {            
            var item  = new app.Models.Item(data.result.item),
                views = app.Views; 
                       
            that.$el.append( new views.Title({title: item.get('title')}).el );
            that.$el.append( new views.Description({description: item.get('description')}).el );
            that.$el.append( new views.InternalNotes({notes: item.get('dealerInternalNotes')}).el );
            that.$el.append( new views.Materials({
                materials: enums.get('material'),
                restricted: item.get('material.restricted') 
            }).el );
            that.$el.append( new views.Measurements(enums.get('measurement')).el );
            that.$el.append( new views.Dimensions(item.get('measurement')).el );
            that.$el.append( new views.Conditions(enums.get('condition.description')).el );

        }).done(function() {
            $('#form-container').html(that.el);
        });
    }
});