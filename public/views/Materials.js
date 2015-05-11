var Materials = Backbone.View.extend({
    tagName: 'select',
    el: "#materials-container",

    initialize: function() {
        console.log('Materials View initialized.');
        this.render();
    },

    render: function() {
        var options = ["Wood", "Metal", "Ceramic", "Glass", "Leather"];
        var str = "";

        for (var i = 0; i < options.length; i++) {
            var tpl = _.template( $("#materials-tpl").html() );
            var option = options[i].charAt(0).toUpperCase() + options[i].slice(1);

            str += tpl({option: option });
        };

        this.$el.append(str);
        return this.el;
    }
});

new Materials();