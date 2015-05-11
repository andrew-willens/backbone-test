var Conditions = Backbone.View.extend({
    el: "#conditions-container",

    initialize: function() {
        console.log('Condition view initialized.');
        this.template = _.template( $("#conditions-tpl").html() );
        this.render();
    },

    render: function() {
        var conditions = ["Distressed", "Fair", "Good", "Excellent"],
            str = "";

        for (var i = 0; i < conditions.length; i++) {
            str += this.template({condition: conditions[i] });
        };

        this.$el.append(str);
        return this.$el;
    }
});

new Conditions();