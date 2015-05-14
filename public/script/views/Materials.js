app.Views.Materials = Backbone.View.extend({
    el: "#materials-container",

    initialize: function() {
        this.model = app.Models.Item;
        this.options.enums = app.Models.Enumerable;
        this.template = _.template( $("#materials-tpl").html() );
    },

    render: function() {
        this.$el.append(
            this.template({
                materials: this.options.enums.get('itemEnums.material'), 
                restricted: this.model.get('item.material.restricted')
            })
        );
        return this;
    }
});