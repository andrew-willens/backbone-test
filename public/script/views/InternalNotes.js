app.Views.InternalNotes = Backbone.View.extend({

    el: "#internalnotes-container",

    initialize: function() {
        this.model = app.Models.Item;
        this.template = _.template( $("#internalnotes-tpl").html() );
    },

    render: function() {
        this.$el.append( 
            this.template({
                notes: this.model.get('item.dealerInternalNotes')
            }) 
        );
        return this;
    }

});