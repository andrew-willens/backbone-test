"use strict";
var Measurements = Backbone.View.extend({
    tagName: 'table',
    el: "#sizing-table",

    initialize: function() {
        console.log('Measurements view initialized');
        this.template = _.template( $("#sizingtable-tpl").html() );
        this.render();
    },

    render: function() {
        var meas_units = ['length', 'depth', 'diameter', 'height'],
                str = "";

        for (var i = 0; i < meas_units.length; i++) {
            var title = meas_units[i].charAt(0).toUpperCase() + meas_units[i].slice(1);

            var tpl = this.template({title: title });

            str += (i+1) % 2 === 0 ? tpl + "</tr>" : "<tr>" + tpl;
        };

        this.$el.append(str);
        return this.el;
    }
});

var meas = new Measurements();
