"use strict";

var Measurement = Backbone.View.extend({
    tagName: 'table',
    className: 'sizing-table',
    template: undefined,

    initialize: function() {
        console.log('Measurement view initialized');
        this.setTemplate();
    },

    setTemplate: function() {
        var that = this;
        $.get('views/tpl/measurement_td.html', function(html) {
            html = html.replace(/\n/g, "")

            // Compile the template
            var template = Handlebars.compile( JSON.stringify(html) );

            // Load model data into template
            var meas_units = ['length', 'depth', 'diameter', 'height'],
                str = "";
            for (var i = 0; i < meas_units.length; i++) {
                var title = meas_units[i].charAt(0).toUpperCase() + meas_units[i].slice(1);
                var tpl = template({title: title });
                str += (i+1) % 2 === 0 ? tpl + "</tr>" : "<tr>" + tpl;
            };
            
            // Load the compiled HTML into the Backbone "el"
            that.$el.append(str);

        }).done(function() {
            $('#sizing-table-li').html(that.render());
        });
    },

    render: function() {
        // console.log(this.el);
        return this.el;
    }
});

var meas = new Measurement();
