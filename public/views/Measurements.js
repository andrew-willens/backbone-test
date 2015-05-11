"use strict";
var Measurements = Backbone.View.extend({
    tagName: 'table',
    el: "#sizing-table",

    initialize: function() {
        console.log('Measurements view initialized');
        this.render();
    },

    render: function() {
        var meas_units = ['length', 'depth', 'diameter', 'height'],
                str = "";

        for (var i = 0; i < meas_units.length; i++) {
            var tpl = _.template( $("#sizingtable-tpl").html() );
            var title = meas_units[i].charAt(0).toUpperCase() + meas_units[i].slice(1);

            tpl = tpl({title: title });

            str += (i+1) % 2 === 0 ? tpl + "</tr>" : "<tr>" + tpl;
        };

        this.$el.append(str);
        return this.el;
    }
});

var meas = new Measurements();
