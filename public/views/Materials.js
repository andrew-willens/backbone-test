var Materials = Backbone.View.extend({
    el: "#materials-container",

    initialize: function() {
        console.log('Materials View initialized.');
        this.template = _.template( $("#materials-tpl").html() );
        this.render();
    },

    render: function() {
        var options = ["Wood", "Metal", "Ceramic", "Glass", "Leather"],
            str = "";

        for (var i = 0; i < options.length; i++) {
            var option = options[i].charAt(0).toUpperCase() + options[i].slice(1);

            str += this.template({option: option });
        };

        this.$el.append(str);
        return this.el;
    }
});

new Materials();